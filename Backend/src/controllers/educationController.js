const educationModel = require('../models/educationModel');

const getEducation = async (req, res) => {
  try {
    const educationData = await educationModel.getEducation();
    res.json(educationData);
  } catch (error) {
    res.status(500).json({ error: 'Education data could not be retrieved.' });
  }
};

module.exports = {
  getEducation
};
