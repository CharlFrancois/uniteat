const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let assosSchema = new Schema({
    username: {
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
    place: {
      type: String
    }
  }, {
    collection: 'Assos'
  })
  
  module.exports = mongoose.model('Assos', assosSchema)