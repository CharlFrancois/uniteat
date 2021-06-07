const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");

router.post(
  "/add-product",
  (req, res) => {
    let { name, brand, dlc, place, description, username, email } = req.body;

    let newProduct = new Product({
      name,
      brand,
      dlc,
      place,
      description,
      username,
      email,
    });

    newProduct.save().then((product) => {
      return res.status(201).json({
        success: true,
        msg: "Le produit a était ajouté à la bdd",
      });
    });
  },

  router.get("/get-products", (req, res) => {

    Product.find({}).then(function(products) {
      res.send(products);
    });
  })
);

router.post("/book-product", (req, res) => {
  let { _id } = req.body;

  Product.findOneAndUpdate({ _id: _id }, { booked: true }).then(() => {
    return res.status(201).json({
      success: true,
      msg: "Le produit à bien était modifié",
    });
  })
});

module.exports = router;
