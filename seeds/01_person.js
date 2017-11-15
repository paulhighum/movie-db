
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('person').del(),

    // Inserts seed entries
    knex('person').insert({id: 1, name: 'Ben Affleck', role: "actor"}),
    knex('person').insert({id: 2, name: 'Matt Damon', role: "actor"}),
    knex('person').insert({id: 3, name: 'Kathryn Bigelow', role: "director"}),
    knex('person').insert({id: 4, name: 'Gus Van Sant', role: "director"})
  )
}
