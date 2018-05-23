var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('routes/index', {
    title: 'Vivamus tincidunt vel ante non semper.',
    currentUrl: '/',
  });
});

module.exports = router;
