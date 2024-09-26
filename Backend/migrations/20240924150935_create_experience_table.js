exports.up = function(knex) {
    return knex.schema.createTable('experience', table => {
      table.increments('id').primary();
      table.string('company_name_tr').notNullable();
      table.string('company_name_en').notNullable();
      table.string('position_tr').notNullable();
      table.string('position_en').notNullable();
      table.string('date').notNullable();
      table.text('description_tr').notNullable();
      table.text('description_en').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('experience');
  };
  