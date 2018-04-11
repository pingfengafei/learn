/**
 * Created by luo_f on 2017/5/18.
 */

var express = require('express');
var router = express.Router();
var book = require('./book');
var fruit = require('./fruit');

router.get('/', function (req, res, next) {
  res.render('index', {title : 'hello world', argument : 'hello root'});
});

router.get('/1234', function (req, res, next) {
  res.render('index', {title : 'hello world', argument : 'hello 1234'});
});

router.use('/book', book);
router.use('/fruit', fruit);

module.exports = router;