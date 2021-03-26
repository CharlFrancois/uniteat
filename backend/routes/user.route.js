const express = require('express');
const userRoute = express.Router();

let UserModel = require('../models/User');
let AssosSchema = require ('../models/Asso')


userRoute.route('/').get((req, res) => {
    UserModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 userRoute.route('/create-user').post((req, res, next) => {
    UserModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

userRoute.route('/create-asso').post((req, res, next) => {
  AssosSchema.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

userRoute.route('/edit-user/:id').get((req, res) => {
   UserModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update User
userRoute.route('/update-user/:id').post((req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('User successfully updated!')
    }
  })
})

module.exports = userRoute;