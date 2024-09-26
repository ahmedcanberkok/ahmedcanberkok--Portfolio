const projectModel = require('../models/projectModel');

const getProjects = async (req, res) => {
  try {
    const projectsData = await projectModel.getProjects();
    res.json(projectsData);
  } catch (error) {
    res.status(500).json({ error: 'Projects data could not be retrieved.' });
  }
};

module.exports = {
  getProjects
};
