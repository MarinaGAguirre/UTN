var express = require('express');
var router = express.Router();

/* GET thanks page. */
router.get('/', function(req, res, next) {
  res.render('thanks');
});

module.exports = router;