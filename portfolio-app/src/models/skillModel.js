const db = require('../../config/database');

const getSkills = async () => {
  // Artık sadece İngilizce sütunu seçiyoruz
  return db('skills').select(['name']);
};

module.exports = {
  getSkills
};
