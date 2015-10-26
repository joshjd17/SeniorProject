/**
 * Created by cfee8_000 on 10/26/2015.
 */
//creates post schema for mongoDB

var mongoose = require('mongoose');

module.exports = mongoose.model('post',{
    email: String,
    userName: String,
    title: String,
    author: String,
    ISBN: String,
    saleType: String

});