const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let assosSchema = new Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    rna: {
      type: String
    },
    password: {
      type: String
    },
  }, {
    collection: 'Assos'
  })
  
  module.exports = mongoose.model('Assos', assosSchema)