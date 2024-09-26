exports.seed = async function(knex) {
  await knex('projects').del();
  await knex('projects').insert([
    {
      title_tr: 'Frontend Pizza Sipariş Projesi',
      title_en: 'Frontend Pizza Order Project',
      category_tr: 'Web Sitesi',
      category_en: 'Website',
      description_tr: 'Bir yemek sitesi için e-ticaret sitesi tasarımı ve geliştirmesi yapıldı.',
      description_en: 'Designed and developed an e-commerce site for a food site',
      image_url: 'http://127.0.0.1:3000/images/projects/image1.png',
      project_link: 'https://canberk-ok-fsweb-s7-challenge-pizza.vercel.app/'
    },
    {
      title_tr: 'The Reducer Pattern: Calculator',
      title_en: 'The Reducer Pattern: Calculator',
      category_tr: 'Web Sitesi',
      category_en: 'Website',
      description_tr: 'Reducer ile hesaplama makinesi çalışmaları.',
      description_en: 'Calculating machine works with Reducer.',
      image_url: 'http://127.0.0.1:3000/images/projects/image2.png',
      project_link: 'https://canberkok-fsweb-s10g1-reducer-calculator.vercel.app/'
    },
    {
      title_tr: 'IMDB Film Veritabanı',
      title_en: 'IMDB Movie Database',
      category_tr: 'Web Sitesi',
      category_en: 'Website',
      description_tr: 'IMDB Film veritabanı geliştirmesi yapıldı.',
      description_en: 'IMDB Movie database has been improved.',
      image_url: 'http://127.0.0.1:3000/images/projects/image3.png',
      project_link: 'https://canberkok-fsweb-s10g2-redux-filmler.vercel.app/movies'
    },
    {
      title_tr: 'Rastgele Şaka',
      title_en: 'The Random Joke',
      category_tr: 'Web Sitesi',
      category_en: 'Website',
      description_tr: 'Rastgele şaka üreten web sitesi çalışması yapıldı.',
      description_en: 'A website that generates random jokes was created.',
      image_url: 'http://127.0.0.1:3000/images/projects/image4.png',
      project_link: 'https://fsweb-s10g4-thunk-and-apis-psi.vercel.app/'
    },
    {
      title_tr: 'Employee Crud App',
      title_en: 'Employee Crud App',
      category_tr: 'Web Sitesi',
      category_en: 'Website',
      description_tr: 'Employe kayıtlarını düzenleyen web sitesi geliştirildi. Web sitesi ile ilgili kaynak kodlar .net practice ve react practice adıyla repomda yer almaktadır.',
      description_en: 'A website that organizes employment records has been developed. The source codes for the website are located in the repo under the names .net practice and react practice.',
      image_url: 'http://127.0.0.1:3000/images/projects/image5.png',
      project_link: 'https://github.com/ahmedcanberkok/.NET-Practice/tree/master'
    }
  ]);
};
