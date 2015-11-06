var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('bbApp',['postlist','deptlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json({strict: false}));


// For displaying posts in the Recent Feed
app.get('/postlistMain', function(req, res) {
	console.log("I received a MAIN GET request");
	db.postlist.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

// For displaying 1 post in the view
app.get('/viewlist', function(req, res) {
	console.log("I received a MAIN GET request");
	db.postlist.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});



// For displaying posts in the Browsing partial
app.get('/postlistClass', function(req, res) {
	console.log("I received a CLASS GET request");

app.get('/postlist', function(req, res) {
	console.log("I received a GET request");

app.get('/postlist', function(req, res) {
	console.log("I received a GET request");

	db.postlist.find({department: deptSelect.toString(), class: classSelect.toString()}, function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/postlist', function (req, res) {
	console.log(req.body);
	db.postlist.insert(req.body, function (err, doc) {
		console.log(doc);
		res.json(doc);
	});
});

app.get('/deptlist',function(req,res) {
	console.log("I received a dept GET request");
	db.postlist.distinct('department', {}, function(err, docs) {
		console.log(docs);
		res.json(docs);
		});
});
var deptSelect;
app.post('/deptlist', function(req,res){
	console.log("this is the req body " + req.body);
	deptSelect = req.body;
	res.send();
});

app.get('/classlist',function(req,res) {
	console.log("I received a class GET request");
	console.log("deptSelect = "+deptSelect);

	db.postlist.distinct('class', {department : deptSelect.toString()}, function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});
var classSelect;
app.post('/classlist',function(req,res) {
	console.log("This is the class req body " + req.body);
	classSelect = req.body;
	res.send();

});

app.listen(8000);
console.log("Server listening on port 8000");
