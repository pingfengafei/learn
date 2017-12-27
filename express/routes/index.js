var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express', argument: 'world'});
});

router.get('/helloworld', function (req, res, next) {
  res.render('hello-world', {title: 'hello world', argument: 'hello react'});
});

module.exports = router;
