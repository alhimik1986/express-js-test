var express = require('express');
var router = express.Router();

router.get('/:menuItem', function(req, res, next) {
  var menuItem = req.params.menuItem ? req.params.menuItem : null;
  res.render('routes/right-menu', {
    title: 'Vivamus tincidunt vel ante non semper' + (menuItem ? ' #' + menuItem : '') + '.',
    currentUrl: '/right-menu/' + menuItem,
  });
});

module.exports = router;
