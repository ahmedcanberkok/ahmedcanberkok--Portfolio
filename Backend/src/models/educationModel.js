const db = require('../../config/database');

const getEducation = async () => {
  // Artık sadece İngilizce sütunları seçiyoruz
  return db('education').select(['university_name', 'program', 'date', 'description']);
};

module.exports = {
  getEducation
};
