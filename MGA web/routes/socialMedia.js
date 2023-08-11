var express = require('express');
var router = express.Router();

/* GET socialMedia page. */
router.get('/', function(req, res, next) {
  res.render('socialMedia');
});

module.exports = router;