const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../config/keys").secret;
const Asso = require("../../models/Asso");

router.post("/register", (req, res) => {
  let { name, email, rna, password, place, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.status(400).json({
      msg: "Les mots de passes ne sont pas les mêmes",
    });
  }
  Asso.findOne({ name: name }).then((asso) => {
    if (asso) {
      return res.status(400).json({
        msg: "Le nom d'utilisateur est déjà utilisé",
      });
    }
  });
  Asso.findOne({ email: email }).then((asso) => {
    if (asso) {
      return res.status(400).json({
        msg: "L'email est déjà utilisé",
      });
    }
  });
  Asso.findOne({ rna: rna }).then((asso) => {
    if (asso) {
      return res.status(400).json({
        msg: "Le numéro RNA est déjà utilisé",
      });
    }
  });

  let newAsso = new Asso({
    name,
    rna,
    password,
    email,
    place
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAsso.password, salt, (err, hash) => {
      if (err) throw err;
      newAsso.password = hash;
      newAsso.save().then((asso) => {
        return res.status(201).json({
          success: true,
          msg: "L'utilisateur a était ajouté à la bdd",
        });
      });
    });
  });
});

router.post("/login", (req, res) => {
  Asso.findOne({ email: req.body.email }).then((asso) => {
    if (!asso) {
      return res.status(404).json({
        msg: "L'utilisateur n'existe pas",
        success: false,
      });
    }
    bcrypt.compare(req.body.password, asso.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          _id: asso._id,
          name: asso.name,
          email: asso.email,
        };

        jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
          res.status(200).json({
            success: true,
            token: `Bearer ${token}`,
            asso: asso,
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
        asso: req.asso
    });
  }
);

module.exports = router;
