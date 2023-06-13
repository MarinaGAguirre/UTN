var express = require('express');
var router = express.Router();

/* GET social media page. */
router.get('/', function(req, res, next) {
  res.render('social-media'); //social-media.hbs ubicado en views
});

module.exports = router;