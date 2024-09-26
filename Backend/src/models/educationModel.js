const db = require('../../config/database');

const getEducation = async (language) => {
  const columns = language === 'tr' ? ['university_name_tr as university_name', 'program_tr as program', 'date', 'description_tr as description'] :
                                      ['university_name_en as university_name', 'program_en as program', 'date', 'description_en as description'];

  return db('education').select(columns);
};

module.exports = {
  getEducation
};
