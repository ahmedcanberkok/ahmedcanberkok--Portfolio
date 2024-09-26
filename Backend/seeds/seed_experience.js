exports.seed = async function(knex) {
  // Mevcut verileri temizleyelim
  await knex('experience').del();
  
  // Yeni verilerimizi ekleyelim
  await knex('experience').insert([
    {
      company_name_tr: 'Beam Teknoloji',
      company_name_en: 'Beam Technology',
      position_tr: 'Kurulum ve Konfigürasyon Yetkilisi ',
      position_en: 'Installation and Configuration Officer',
      date: '04/02/2021-15/03/2021',
      description_tr: 'Linux sunucularda Docker teknolojisi kullanarak olta.la ürününkurulumu ve güncellenmesi işlemlerini gerçekleştirdim. Olta.la ürünü kullanıcılarına teknik destek verdim.',
      description_en: 'I installed and updated the olta.la product using Docker technology on Linux servers. I provided technical support to the users of the olta.la product.'
    },
    {
      company_name_tr: 'Turksat',
      company_name_en: 'Turksat',
      position_tr: 'Veri Merkezi Stajyeri',
      position_en: 'Data Center Intern',
      date: '2020/02/04-15/03/2020',
      
      description_tr: 'Data Center içindeki test cihazlarının linux kurulumunu gerçekleştirdim. Temel linux komutlarıyla pratik yaparak deneyim kazandım.',
      description_en: 'I performed the Linux installation of test devices in the Data Center. I gained experience by practicing with basic Linux commands.'
    },
    {
      company_name_tr: 'TRT',
      company_name_en: 'TRT',
      position_tr: 'Bilgi Teknolojileri Stajyeri',
      position_en: 'Information Technologies Intern',
      date: '05/08/2019-20/09/2019',
      description_tr: 'Ağ teknolojileriyle ilgili deneyim kazandım. Network ekibi ile fiziksel saha çalışmalarına katıldım. Sunucu odasının düzenlenmesine katkı sağladım.',
      description_en: 'I gained experience in network technologies. I participated in physical field work with the network team. I contributed to the organization of the server room.'
    }
  ]);
};
