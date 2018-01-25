var express = require('express');
var router = express.Router();
var db = require('../db/knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("GET GOT!")
})

module.exports = router;
