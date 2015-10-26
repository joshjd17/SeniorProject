/**
 * Created by cfee8_000 on 10/26/2015.
 */
var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    postsController    = require('./server/controllers/posts-controller.js');
//Conects to db, db has 2 collections: bbPosts and bbBooks
mongoose.connect('mongodb://localhost:27017/bbDB');
//bodyParser reads body of HTTP messages
app.use(bodyParser());


app.get('/', function (req, res) {
    res.sendFile(__dirname+ '/index.html');
});

//REST API
app.get('/api/posts',postsController.list);
app.post('api/posts', postsController.create);

app.listen(3000, function() {
    console.log('I\'m Listening...');
})