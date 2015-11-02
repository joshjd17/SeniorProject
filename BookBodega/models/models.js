/**
 * models.js
 * Configures the schemas used for the database
 */
// Models for MongoDB
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
 username: String,
    password: String, //hash created from password
    created_at: {type: Date, default: Date.now}
});

var bookSchema = new mongoose.Schema({
    author: String,
    title: String,
    ISBN: Number,
    dept: String,
    course: String

});
var postSchema = new mongoose.Schema({
    email: String,
    userName: String,
    title: String,
    author: String,
    ISBN: String,
    saleType: String
});

// Declare a model called User which has the Schema userSchema
mongoose.model('User', userSchema);
mongoose.model('Post', postSchema);
mongoose.model('Book', bookSchema);