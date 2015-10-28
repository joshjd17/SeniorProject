var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');
//connects to MongoDB
mongoose.connect('mongodb://localhost:27017/mean-demo');
//Uses bodyparser to read the body of HTTP messages
app.use(bodyParser());
//route for root directory that returns index, the main page
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});
//creates a shortcut so that the client folder doesnt need to be referenced 
//when calling the js folder
app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);
//express is set to listen to port 3000
//can call localhost:3000 in browser to view web app
app.listen(3000, function() {
  console.log('I\'m Listening...');
})