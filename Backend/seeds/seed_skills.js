exports.seed = async function(knex) {
  await knex('skills').del();
  await knex('skills').insert([
    { name_tr: 'ReactJS', name_en: 'ReactJS' },
    { name_tr: 'NodeJS', name_en: 'NodeJS' },
    { name_tr: 'CSS', name_en: 'CSS' },
    { name_tr: 'Java', name_en: 'Java' },
    { name_tr: 'Spring Boot', name_en: 'Spring Boot' },
    { name_tr: '.NET', name_en: '.NET' },
    { name_tr: 'SQL', name_en: 'SQL' },
    { name_tr: 'Docker', name_en: 'Docker' },
    { name_tr: 'MongoDB', name_en: 'MongoDB' },
    { name_tr: 'Linux', name_en: 'Linux' },

  ]);
};
