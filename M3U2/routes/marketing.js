var express = require('express');
var router = express.Router();

/* GET marketing page. */
router.get('/', function(req, res, next) {
  res.render('marketing'); //marketing.hbs ubicado en views
});

module.exports = router;