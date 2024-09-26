exports.up = function(knex) {
    return knex.schema.createTable('education', table => {
      table.increments('id').primary();
      table.string('university_name_tr').notNullable();
      table.string('university_name_en').notNullable();
      table.string('program_tr').notNullable();
      table.string('program_en').notNullable();
      table.string('date').notNullable();
      table.text('description_tr').notNullable();
      table.text('description_en').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('education');
  };
  