var express = require('express');
var router = express.Router();

/* GET letsStart page. */
router.get('/', function(req, res, next) {
  res.render('letsStart');
});

module.exports = router;