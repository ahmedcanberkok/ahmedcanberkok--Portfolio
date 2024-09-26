exports.up = function(knex) {
    // Experience tablosunu oluştur
    return knex.schema
      .createTable('experience', table => {
        table.increments('id').primary();
        table.string('company_name').notNullable(); // Sadece İngilizce isim
        table.string('position').notNullable(); // Sadece İngilizce pozisyon
        table.string('date').notNullable();
        table.text('description').notNullable(); // Sadece İngilizce açıklama
      })
      // Education tablosunu oluştur
      .createTable('education', table => {
        table.increments('id').primary();
        table.string('university_name').notNullable(); // Sadece İngilizce isim
        table.string('program').notNullable(); // Sadece İngilizce program
        table.string('date').notNullable();
        table.text('description').notNullable(); // Sadece İngilizce açıklama
      })
      // Projects tablosunu oluştur
      .createTable('projects', table => {
        table.increments('id').primary();
        table.string('title').notNullable(); // Sadece İngilizce başlık
        table.string('category').notNullable(); // Sadece İngilizce kategori
        table.text('description').notNullable(); // Sadece İngilizce açıklama
        table.string('image_url').notNullable();
        table.string('project_link').notNullable();
      })
      // Skills tablosunu oluştur
      .createTable('skills', table => {
        table.increments('id').primary();
        table.string('name').notNullable(); // Sadece İngilizce beceri ismi
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('education')
      .dropTableIfExists('experience')
      .dropTableIfExists('skills');
  };
  