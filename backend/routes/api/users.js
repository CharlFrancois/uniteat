const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../config/keys").secret;
const User = require("../../models/User");

router.post("/register", (req, res) => {
  let { username, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.status(400).json({
      msg: "Les mots de passes ne sont pas les mêmes",
      success: false
    });
  }
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "L'email est déjà utilisé",
        success: false
      });
    }
  });

  let newUser = new User({
    username,
    password,
    email,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(201).json({
          success: true,
          msg: "L'utilisateur a était ajouté à la bdd",
        });
      });
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "L'utilisateur n'existe pas",
        success: false,
      });
    }
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          _id: user._id,
          username: user.username,
          email: user.email,
        };

        jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
          res.status(200).json({
            success: true,
            token: `Bearer ${token}`,
            user: user,
            msg: "Vous êtes maintenant connecté",
          });
        });
      } else {
        return res.status(404).json({
          msg: "Mot de passe incorrect",
          success: false,
        });
      }
    });
  });
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      user: req.user,
    });
  }
);

router.post("/edit-user-email", (req, res) => {
  let { _id, newEmail } = req.body;

  User.findOne({ email: newEmail }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "L'email est déjà utilisé",
        success: false
      });
    }
  });

  User.findOneAndUpdate({ _id: _id }, { email: newEmail }).then(() => {
    return res.status(201).json({
      success: true,
      msg: "L'utilisateur à bien était modifié",
    });
  });
});

router.post("/edit-user-password", (req, res) => {
  let { email, oldPassword, newPassword, newPasswordConfirm } = req.body;

  if (newPassword !== newPasswordConfirm) {
    return res.status(400).json({
      msg: "Les mots de passes ne sont pas les mêmes",
      success: false
    });
  }

  User.findOne({ email: email }).then((user) => {
    bcrypt.compare(oldPassword, user.password).then((isMatch) => {
      if (isMatch) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) throw err;
            newPassword = hash;
            User.findOneAndUpdate(
              { email: email },
              { password: newPassword }
            ).then(() => {
              return res.status(201).json({
                success: true,
                msg: "L'utilisateur à bien était modifié",
              });
            });
          });
        });
      } else {
        return res.status(404).json({
          msg: "Mot de passe incorrect",
          success: false,
        });
      }
    });
  });
});

router.post("/forget-password", (req, res) => {
  let { email, newPassword, newPasswordConfirm } = req.body;

  if (newPassword !== newPasswordConfirm) {
    return res.status(400).json({
      msg: "Les mots de passes ne sont pas les mêmes",
      success: false
    });
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newPassword, salt, (err, hash) => {
      if (err) throw err;
      newPassword = hash;
      User.findOneAndUpdate(
        { email: email },
        { password: newPassword }
      ).then(() => {
        return res.status(201).json({
          success: true,
          msg: "L'utilisateur à bien était modifié",
        });
      });
    });
  });
});

module.exports = router;
