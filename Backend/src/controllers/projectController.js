const projectModel = require('../models/projectModel');

const getProjects = async (req, res) => {
  const language = req.language || 'en'; // Varsayılan dil İngilizce
  try {
    const projectsData = await projectModel.getProjects(language);
    res.json(projectsData);
  } catch (error) {
    res.status(500).json({ error: 'Projects data could not be retrieved.' });
  }
};

module.exports = {
  getProjects
};
