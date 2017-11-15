
exports.seed = function(knex, Promise) {
  return knex('movie_person').del()
  .then(function() {
  return knex('movie').del();
  }).then(function() {
  return knex('person').del();
  })
}
