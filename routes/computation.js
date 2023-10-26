var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var x = parseFloat(req.query.x) || Math.round(Math.random()*10);
var result=0;
   var result=Math.acosh(x);
  res.send(`random numbers are ${x} <br>
  and cosine of a number  f(${x}) is ${result}`);
});

module.exports = router;
