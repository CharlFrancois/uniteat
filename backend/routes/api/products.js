const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");
const multer = require("multer");

// Image upload
const DIR = "./uploads/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.post(
  "/add-product",
  upload.array("files", 10),
  (req, res) => {
    let { name, brand, dlc, place, description, username, email } = req.body;
    const reqFiles = [];
    for (var i = 0; i < req.files.length; i++) {
      reqFiles.push(req.files[i].filename);
    }

    let newProduct = new Product({
      name,
      brand,
      dlc,
      place,
      description,
      username,
      email,
      files: reqFiles
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
  });
});

module.exports = router;
