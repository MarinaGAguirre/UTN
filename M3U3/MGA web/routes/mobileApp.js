var express = require('express');
var router = express.Router();

/* GET mobileApp page. */
router.get('/', function(req, res, next) {
  res.render('mobileApp');
});

module.exports = router;