//creates the model for the meetup object
var Meetup = require('../models/meetup');
//creates json Meetup object that can be saved to the db
module.exports.create = function (req, res) {
  var meetup = new Meetup(req.body);
  meetup.save(function (err, result) {
    res.json(result);
  });
}
//grabs all the current meetup objects from the MongoDB collection
module.exports.list = function (req, res) {
  Meetup.find({}, function (err, results) {
    res.json(results);
  });
}