exports.up = function(knex) {
    return knex.schema.createTable('skills', table => {
      table.increments('id').primary();
      table.string('name_tr').notNullable(); // Türkçe beceri ismi
      table.string('name_en').notNullable(); // İngilizce beceri ismi
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('skills');
  };
  