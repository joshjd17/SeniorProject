//creates the schema for MongoDB
var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup', {
  name: String
});