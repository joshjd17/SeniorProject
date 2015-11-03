var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('bbApp',['postlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/postlist', function(req, res){
	console.log("I received a GET request");
	db.postlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
app.post('/postlist', function(req, res){
	console.log(req.body);
	db.postlist.insert(req.body,function(err,doc){
		res.json(doc);
	});
app.get('/deptlist',function(req,res){
	console.log("I received a dept GET request");
	db.postlist.distinct("department",function(err,docs){
		console.log(docs);
		res.json(docs);
	});
})
});

 

});


app.listen(8000);
console.log("Server listening on port 8000");
