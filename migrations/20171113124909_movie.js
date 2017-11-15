
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table){
    table.increments()
    table.text('title')
    table.integer('director_id').references('person.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movie')
}
