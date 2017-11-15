
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('movie_person').del(),

    // Inserts seed entries
    knex('movie_person').insert({id: 1, person_id: 1, movie_id: 1}),
    knex('movie_person').insert({id: 2, person_id: 2, movie_id: 1}),
    knex('movie_person').insert({id: 3, person_id: 1, movie_id: 3})
  )
}
