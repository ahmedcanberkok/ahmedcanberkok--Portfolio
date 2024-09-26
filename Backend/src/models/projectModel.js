const db = require('../../config/database');

const getProjects = async (language) => {
  const columns = language === 'tr' ? ['title_tr as title', 'category_tr as category', 'description_tr as description', 'image_url', 'project_link'] :
                                      ['title_en as title', 'category_en as category', 'description_en as description', 'image_url', 'project_link'];

  return db('projects').select(columns);
};

module.exports = {
  getProjects
};
