var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/:id'], function(req, res, next) {
  let id = req.params.id ? parseInt(req.params.id) : 1;
  res.render('index', {
  	title: 'Vivamus tincidunt vel ante non semper #' + id + '.',
  	id: id,
  });
});

module.exports = router;
