const db = require('../../config/database');

const getProjects = async () => {
  // Artık sadece İngilizce sütunları seçiyoruz
  return db('projects').select(['title', 'category', 'description', 'image_url', 'project_link']);
};

module.exports = {
  getProjects
};
