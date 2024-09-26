const db = require('../../config/database');

const getExperience = async () => {
  // Artık sadece İngilizce sütunları seçiyoruz
  return db('experience').select(['company_name', 'position', 'date', 'description']);
};

module.exports = {
  getExperience
};
