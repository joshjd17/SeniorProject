/**
 * api.js
 * Routing for posts
 */
var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Post = mongoose.model('Post');
var User = mongoose.model('User');

//router.use('/posts');

router.route('/posts')
    //creates a new post
    .post(function(req, res){
        var post = new Post();
        post.title = this.title;
        post.save(function(err, post) {
            if (err){
                return res.send(500, err);
            }
            return res.json(post);
        });
    }) /**
 email: String,
 userName: String,
 title: String,
 author: String,
 ISBN: String,
 saleType: String
    .post(function(req, res){
        var post = new Post();
        post.text = req.body.text;
        post.created_by = req.body.created_by;
        post.save(function(err, post) {
            if (err){
                return res.send(500, err);
            }
            return res.json(post);
        });
    })*/
    //gets all posts
    .get(function(req, res){
        Post.find(function(err, posts){
            if(err){
                return res.send(500, err);
            }
            return res.send(posts);
        });
    });

//post-specific commands. likely won't be used
router.route('/posts/:id')
    //gets specified post
    .get(function(req, res){
        Post.findById(req.params.id, function(err, post){
            if(err)
                res.send(err);
            res.json(post);
        });
    })
    //updates specified post
    .put(function(req, res){
        Post.findById(req.params.id, function(err, post){
            if(err)
                res.send(err);

            post.created_by = req.body.created_by;
            post.text = req.body.text;

            post.save(function(err, post){
                if(err)
                    res.send(err);

                res.json(post);
            });
        });
    })
    //deletes the post
    .delete(function(req, res) {
        Post.remove({
            _id: req.params.id
        }, function(err) {
            if (err)
                res.send(err);
            res.json("deleted :(");
        });
    });

module.exports = router;