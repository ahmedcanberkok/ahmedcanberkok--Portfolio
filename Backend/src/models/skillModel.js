const db = require('../../config/database');

const getSkills = async (language) => {
  const columns = language === 'tr' ? ['name_tr as name'] : ['name_en as name'];
  return db('skills').select(columns);
};

module.exports = {
  getSkills
};
