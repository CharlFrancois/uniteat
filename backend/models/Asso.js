const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rna: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Asso = mongoose.model("assos", AssoSchema);
