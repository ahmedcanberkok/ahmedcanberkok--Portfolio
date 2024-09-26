exports.seed = async function(knex) {
  // Mevcut verileri temizleyelim
  await knex('experience').del();
  
  // Yeni verilerimizi ekleyelim
  await knex('experience').insert([
    {
      company_name: 'Beam Technology',
      position: 'Installation and Configuration Officer',
      date: '04/02/2021-15/03/2021',
      description: 'I installed and updated the olta.la product using Docker technology on Linux servers. I provided technical support to the users of the olta.la product.'
    },
    {
      company_name: 'Turksat',
      position: 'Data Center Intern',
      date: '04/02/2020-15/03/2020',
      description: 'I performed the Linux installation of test devices in the Data Center. I gained experience by practicing with basic Linux commands.'
    },
    {
      company_name: 'TRT',
      position: 'Information Technologies Intern',
      date: '05/08/2019-20/09/2019',
      description: 'I gained experience in network technologies. I participated in physical field work with the network team. I contributed to the organization of the server room.'
    }
  ]);
};
