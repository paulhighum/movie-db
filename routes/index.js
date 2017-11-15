var express = require('express');
var router = express.Router();
var db = require('../db/knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  return db.select('title', 'name').from('movie').innerJoin('movie_person', 'movie.id', 'movie_person.movie_id').innerJoin('person', 'person.id', 'movie_person.movie_id')
  .then(function(movieData){
    console.log(movieData)
  })
  res.render('index', { title: 'Express' })
})

module.exports = router;
