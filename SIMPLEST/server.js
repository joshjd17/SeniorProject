var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('simplest',['productlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/productlist', function(req, res){
	console.log("I received a GET request");
	db.productlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
app.post('/productlist', function(req, res){
	console.log(req.body);
	db.productlist.insert(req.body,function(err,doc){
		res.json(doc);
	});
});
 

});


app.listen(3000);
console.log("Server listening on port 3000");