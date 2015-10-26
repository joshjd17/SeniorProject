/**
 * Created by cfee8_000 on 10/26/2015.
 */
var bbPost = require('../models/postModel.js');

module.exports.create = function(req,res) {
    var post =  new bbPost(req.body);
    post.save(function(err,result){
        res.json(result);
    });

}

module.exports.list = function(req,res){
    bbPosts.find({},function(err,results){
        res.json(results);
    });
}