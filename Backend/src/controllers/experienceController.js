const experienceModel = require('../models/experienceModel');

const getExperience = async (req, res) => {
  try {
    const experienceData = await experienceModel.getExperience();
    res.json(experienceData);
  } catch (error) {
    res.status(500).json({ error: 'Experience data could not be retrieved.' });
  }
};

module.exports = {
  getExperience
};
