const skillModel = require('../models/skillModel');

const getSkills = async (req, res) => {
  try {
    const skillsData = await skillModel.getSkills();
    res.json(skillsData);
  } catch (error) {
    res.status(500).json({ error: 'Skills data could not be retrieved.' });
  }
};

module.exports = {
  getSkills
};
