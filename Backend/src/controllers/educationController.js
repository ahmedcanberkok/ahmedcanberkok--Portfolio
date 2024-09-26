const educationModel = require('../models/educationModel');

const getEducation = async (req, res) => {
  const language = req.language || 'en'; // Varsayılan dil İngilizce
  try {
    const educationData = await educationModel.getEducation(language);
    res.json(educationData);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getEducation
};
