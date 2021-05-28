const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productsSchema = new Schema({
    name: {
      type: String
    },
    dlc: {
      type: Date
    },
    place: {
      type: String
    },
    description: {
      type: String
    }
  }, {
    collection: 'Products'
  })
  
  module.exports = mongoose.model('Products', productsSchema)