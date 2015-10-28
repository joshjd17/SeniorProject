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

//create Router() object
var router = express.Route();

router.use(function(req,res,next){
    console.log("/" + req.method);
    next();
})

//provide all routes below

//homepage
app.get('/', function (req, res) {
    res.sendFile(__dirname+ '/index.html');
});

//about page
app.get('/about', function(req, res){
    res.sendFile(_dirname + '/index.htlm');

})

//browse page
app.get('/browse', function(req, res){
    res.sendFile(_dirname + '/index.htlm');

})

//post page
app.get('/makepost', function(req, res){
    res.sendFile(_dirname + '/index.htlm');

})

//contact page
app.get('/contact', function(req, res){
    res.sendFile(_dirname + '/index.htlm');

})

app.use("/", router);

//handle any 404 errors on each page

app.use("*", function(req,res){
    res.status(404).send('404');
})

//REST API
app.get('/api/posts',postsController.list);
app.post('api/posts', postsController.create);
//app.get('/api/posts/dept/ComputerScience',postsController.csPosts);
app.listen(3000, function() {
    console.log('I\'m Listening...');
})