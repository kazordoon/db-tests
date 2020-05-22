exports.up = (knex) =>
  knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('name', 100).notNullable()
    table.string('description', 255).notNullable()
    table.decimal('price', 6, 2).notNullable()
  })

exports.down = (knex) => knex.schema.dropTable('products')
