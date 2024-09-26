exports.seed = async function(knex) {
  await knex('education').del();
  await knex('education').insert([
    {
      university_name_tr: 'Başkent Üniversitesi',
      university_name_en: 'Baskent University',
      program_tr: 'Yönetim Bilişim Sistemleri',
      program_en: 'Management Information Systems',
      date: '20/09/2016-20/06/2020',
      description_tr: 'Bilgisayar mühendisliği lisans programını başarıyla tamamladım.',
      description_en: 'Successfully completed the undergraduate program in management information systems.'
    },
    {
      university_name_tr: 'Ankara Üniversitesi',
      university_name_en: 'Ankara University',
      program_tr: 'Yüksek Lisans - Dış Ticaret Ve Uluslararası Pazarlama',
      program_en: 'Masters - Foreign Trade and International Marketing',
      date: '15/02/2022-15/06/2023',
      description_tr: 'Dış Ticaret Ve Uluslararası Pazarlama alanında yüksek lisans yapmaktayım.',
      description_en: 'Currently pursuing a master’s degree in Foreign Trade and International Marketing.'
    },
    {
      university_name_tr: 'Workintech',
      university_name_en: 'Workintech',
      program_tr: 'Sertifika Programı - Full Stack Web Development Eğitimi',
      program_en: 'Certificate Program - Full Stack Web Development Training',
      date: '15/03/2023-15/10/2023',
      description_tr: 'React JS, node JS ve Java ile frontend ve backend alanlarında eğitim aldım.',
      description_en: 'I received training in frontend and backend areas with React JS, Node JS and Java.'
    }
  ]);
};
