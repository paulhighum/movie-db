
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('movie').del(),

    // Inserts seed entries
    knex('movie').insert({id: 1, title: 'Good Will Hunting', director_id: 4}),
    knex('movie').insert({id: 2, title: 'The Hurt Locker', director_id: 4}),
    knex('movie').insert({id: 3, title: 'Argo', director_id: 1})
  )
}
