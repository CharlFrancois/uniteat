const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
const Asso = require("../models/Asso");
const key = require("./keys").secret;

const optsUser = {};
optsUser.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
optsUser.secretOrKey = key;

// const optsAsso = {};
// optsAsso.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// optsAsso.secretOrKey = key;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(optsUser, (jwt_payload, done) => {
      User.findById(jwt_payload._id)
        .then((user) => {
          if (user) return done(null, user);
          return done(null, false);
        })
        .catch((err) => {
          console.log(err);
        });
    })
  );

  // passport.use(
  //   new JwtStrategy(optsAsso, (jwt_payload, done) => {
  //     Asso.findById(jwt_payload._id)
  //       .then((asso) => {
  //         if (asso) return done(null, asso);
  //         return done(null, false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   })
  // );
};
