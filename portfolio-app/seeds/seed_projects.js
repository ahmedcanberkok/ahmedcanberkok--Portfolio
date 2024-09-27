exports.seed = async function(knex) {
  await knex('projects').del();
  await knex('projects').insert([
    {
      title: 'Frontend Pizza Order Project',
      category: 'Website',
      description: 'Designed and developed an e-commerce site for a food site',
      image_url: '/images/projects/image1.png',
      project_link: 'https://canberk-ok-fsweb-s7-challenge-pizza.vercel.app/'
    },
    {
      title: 'The Reducer Pattern: Calculator',
      category: 'Website',
      description: 'Calculating machine works with Reducer.',
      image_url: '/images/projects/image2.png',
      project_link: 'https://canberkok-fsweb-s10g1-reducer-calculator.vercel.app/'
    },
    {
      title: 'IMDB Movie Database',
      category: 'Website',
      description: 'IMDB Movie database has been improved.',
      image_url: '/images/projects/image3.png',
      project_link: 'https://canberkok-fsweb-s10g2-redux-filmler.vercel.app/movies'
    },
    {
      title: 'The Random Joke',
      category: 'Website',
      description: 'A website that generates random jokes was created.',
      image_url: '/images/projects/image4.png',
      project_link: 'https://fsweb-s10g4-thunk-and-apis-psi.vercel.app/'
    },
    {
      title: 'Employee Crud App',
      category: 'Website',
      description: 'A website that organizes employment records has been developed. The source codes for the website are located in the repo under the names .net practice and react practice.',
      image_url: '/images/projects/image5.png',
      project_link: 'https://github.com/ahmedcanberkok/.NET-Practice/tree/master'
    }
  ]);
};
