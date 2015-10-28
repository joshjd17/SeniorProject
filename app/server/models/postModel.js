/**
 * Created by cfee8_000 on 10/26/2015.
 */
//creates post schema for mongoDB

var mongoose = require('mongoose');

var bookSchema = mongoose.model('bbBook', {
    title: String,
    author: String,
    ISBN:String,
    dept: String,
    course: String
});

var postSchema = mongoose.model('post',{
    email: String,
    userName: String,
    book: [bookSchema],
    saleType: String

});

module.exports = bookSchema;
module.exports = postSchema;