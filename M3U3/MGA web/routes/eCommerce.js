var express = require('express');
var router = express.Router();

/* GET eCommerce page. */
router.get('/', function(req, res, next) {
  res.render('eCommerce');
});

module.exports = router;