const db = require('../../config/database');

const getExperience = async (language) => {
  const columns = language === 'tr' ? ['company_name_tr as company_name', 'position_tr as position','date', 'description_tr as description'] :
                                      ['company_name_en as company_name', 'position_en as position','date', 'description_en as description'];

  return db('experience').select(columns);
};

module.exports = {
  getExperience
};
