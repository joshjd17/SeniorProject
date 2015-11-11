var express = require('express');
var app = express();
var mongojs = require('mongojs');
var ObjectID = require('mongojs').ObjectId;
//var db = mongojs('mongodb://ds042138.mongolab.com:42138/testbodega',['postlist']);
var db = mongojs('bbApp',['postlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json({strict: false}));

// For displaying posts in the Main partial
app.get('/postlistMain', function(req, res) {
	console.log("I received a MAIN GET request - /postlistMain.get() - server.js");
	db.postlist.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

// For displaying posts in the Browsing partial
app.get('/postlistClass', function(req, res) {
	console.log("I received a CLASS GET request - /postlistClass.get() - server.js - Data: " + deptSelect);
	db.postlist.find({department: deptSelect.toString(), class: classSelect.toString()}, function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

// For displaying a single post in the Viewpost partial
app.get('/singlePost', function(req, res) {
	console.log("I received a SINGLE POST GET request - /singlePost.get() - server.js - Data: " + singlePost);
	db.postlist.find({_id: new ObjectID(singlePost.toString())}, function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

// For inserting a new post into the database
app.post('/postlist', function (req, res) {
	console.log("POSTING TO DB - /postlist.post() - server.js - Data: " - req.body);
	//console.log("POSTING TO DB - /postlist.post() - server.js");
	db.postlist.insert(req.body, function (err, doc) {
		singlePost = req.body._id;
		console.log("ID FOR CREATED POST " + singlePost)
		console.log(doc);
		res.json(doc);
	});
});

// For getting the department
app.get('/deptlist',function(req,res) {
	console.log("I received a dept GET request - /deptlist.get() - server.js");
	db.postlist.distinct('department', {}, function(err, docs) {
		console.log(docs);
		res.json(docs);
		});
});

// For setting the department selected into deptSelect
var deptSelect;
app.post('/deptlist', function(req,res){
	console.log("This is the req body - /deptlist.post() - server.js - Data: " + req.body);
	deptSelect = req.body;
	res.send();
});

// For getting the classes within the department
app.get('/classlist',function(req,res) {
	console.log("I received a class GET request - /classlist.get() - server.js - deptSelect = " + deptSelect);
	//console.log("deptSelect = "+deptSelect);
	db.postlist.distinct('class', {department : deptSelect.toString()}, function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

// For setting the class selected into classSelect
var classSelect;
app.post('/classlist',function(req,res) {
	console.log("This is the class req body - /classlist.post() - server.js - Data: " + req.body);
	classSelect = req.body;
	res.send();

});

// For getting the post for the specific id
var singlePost;
app.post('/singlePost',function(req,res) {
	console.log("This is the SINGLEPOST req body - /singlePost.post() - server.js - Data: " + req.body);
	singlePost = req.body;
	res.send();

});

// For removing a post by the specified id
app.post('/emailAndRemove', function(req, res) {
	console.log("I received a DELETE request - /emailAndRemove.post() - server.js " + req.body.toString());
	db.postlist.remove({_id: ObjectID(req.body.toString())}, function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.listen(80);
console.log("Server listening on port 8000");

//module.exports = app;