exports.seed = async function(knex) {
  await knex('education').del();
  await knex('education').insert([
    {
      university_name: 'Baskent University',
      program: 'Management Information Systems',
      date: '20/09/2016-20/06/2020',
      description: 'Successfully completed the undergraduate program in management information systems.'
    },
    {
      university_name: 'Ankara University',
      program: 'Masters - Foreign Trade and International Marketing',
      date: '15/02/2022-15/06/2023',
      description: 'Currently pursuing a master’s degree in Foreign Trade and International Marketing.'
    },
    {
      university_name: 'Workintech',
      program: 'Certificate Program - Full Stack Web Development Training',
      date: '15/03/2023-15/10/2023',
      description: 'I received training in frontend and backend areas with React JS, Node JS, and Java.'
    }
  ]);
};
