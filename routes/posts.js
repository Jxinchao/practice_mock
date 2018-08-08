var express = require('express');
var post = require('../mutual/post');
var router = express.Router();

// create
router.post('/posts', function(req, res, next) {
  post.add(req, res, next);
});

// new
router.get('/posts/new', function(req, res, next) {
  res.render('posts_new');
});

module.exports = router;
