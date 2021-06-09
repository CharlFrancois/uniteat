const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

// Initialisation de l'app
const app = express();

// Middlewares
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
require("./config/passport")(passport);

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection à la BDD réussi");
  })
  .catch((err) => console.log(`Impossible de se connecter à la BDD ${err}`));


// User call
const users = require("./routes/api/users");
const assos = require("./routes/api/assos");
app.use("/api/users", users);
app.use("/api/assos", assos);

// Product call
app.use('/uploads', express.static('public'));
const products = require("./routes/api/products");
app.use("/api/products", products);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Le serveur est bien lancer sur le port ${PORT}`);
});
