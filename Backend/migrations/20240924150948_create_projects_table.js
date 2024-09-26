exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
      table.increments('id').primary();
      table.string('title_tr').notNullable();
      table.string('title_en').notNullable();
      table.string('category_tr').notNullable();
      table.string('category_en').notNullable();
      table.text('description_tr').notNullable();
      table.text('description_en').notNullable();
      table.string('image_url').notNullable();
      table.string('project_link').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects');
  };
  