var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

module.exports = mongoose.Schema({
  uid: String,
  name: String,
  price: Number
});