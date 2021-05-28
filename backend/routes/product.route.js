const express = require('express');
const productRoute = express.Router();

let ProductModel = require('../models/Product');



 productRoute.route('/add-product').post((req, res, next) => {
    ProductModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = productRoute;