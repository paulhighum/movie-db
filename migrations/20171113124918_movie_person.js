
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie_person', function(table){
    table.increments()
    table.integer('person_id').references('person.id')
    table.integer('movie_id').references('movie.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movie_person')
}
