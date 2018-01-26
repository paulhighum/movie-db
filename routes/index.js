var express = require("express")
var router = express.Router()
var db = require("../db/knex.js")

const knex = require("knex")

/* GET home page. */
router.get("/", function(req, res, next){
  db("movie")
    .join("person", "person.id", "=", "movie.director_id")
    .select("movie.id", "movie.title", {director: "person.name"})
    .then(data => {
      return res.json(data)
    })
})

module.exports = router
