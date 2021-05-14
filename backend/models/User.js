const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
}, {
  collection: 'Users'
})

module.exports = mongoose.model('Users', usersSchema)