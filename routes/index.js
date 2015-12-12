var express = require('express');
var router = express.Router();
var path = require('path');
var indexHtmlPath = path.join(__dirname, '../views/index.html');

/* GET home page. */
router.use('/', function(req, res, next) {
  res.sendFile(indexHtmlPath);
});

module.exports = router;
