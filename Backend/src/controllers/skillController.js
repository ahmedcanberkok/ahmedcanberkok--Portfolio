const skillModel = require('../models/skillModel');

const getSkills = async (req, res) => {
  const language = req.language || 'en'; // Varsayılan dil İngilizce
  try {
    const skillsData = await skillModel.getSkills(language);
    res.json(skillsData);
  } catch (error) {
    res.status(500).json({ error: 'Skills data could not be retrieved.' });
  }
};

module.exports = {
  getSkills
};
