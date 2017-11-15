
exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', function(table){
    table.increments()
    table.text('name')
    table.text('role')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('person')
}
