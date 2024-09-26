const experienceModel = require('../models/experienceModel');

const getExperience = async (req, res) => {
  const language = req.language || 'en'; // Varsayılan dil İngilizce
  try {
    const experienceData = await experienceModel.getExperience(language);
    res.json(experienceData);
  } catch (error) {
    res.status(500).json({ error: 'Experience data could not be retrieved.' });
  }
};

module.exports = {
  getExperience
};
