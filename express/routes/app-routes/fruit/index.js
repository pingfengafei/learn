/**
 * Created by luo_f on 2017/5/18.
 */
var express = require('express');
var router = express.Router();

router.get('/banana', (res, req, next) => {
  req.render('fruit-template', {type: 'banana'});
});

module.exports = router;