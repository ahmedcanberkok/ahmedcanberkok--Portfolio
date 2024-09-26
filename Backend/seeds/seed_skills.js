exports.seed = async function(knex) {
  // Tablodaki mevcut verileri sil
  await knex('skills').del();

  // Yeni verileri tek bir "name" sütunu ile ekle
  await knex('skills').insert([
    { name: 'ReactJS' },
    { name: 'NodeJS' },
    { name: 'CSS' },
    { name: 'Java' },
    { name: 'Spring Boot' },
    { name: '.NET' },
    { name: 'SQL' },
    { name: 'Docker' },
    { name: 'MongoDB' },
    { name: 'Linux' },
  ]);
};
