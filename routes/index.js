var express = require('express');
var router = express.Router();

const message = process.env.MESSAGE || 'your life';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: message });
});

module.exports = router;
