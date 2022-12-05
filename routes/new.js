var express = require('express');
var router = express.Router();

/* GET new page. */
router.get('/new', function(req, res, next) {
    res.render('form')
  })

module.exports = router;