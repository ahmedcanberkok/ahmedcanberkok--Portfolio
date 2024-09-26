require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Controller dosyalarını import ediyoruz
const skillController = require('./src/controllers/skillController');
const experienceController = require('./src/controllers/experienceController');
const educationController = require('./src/controllers/educationController');
const projectController = require('./src/controllers/projectController');

const app = express();

// Middleware'leri ekliyoruz
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Route'ları tanımlıyoruz
app.get('/api/education', educationController.getEducation);
app.get('/api/experience', experienceController.getExperience);
app.get('/api/skills', skillController.getSkills);
app.get('/api/projects', projectController.getProjects);

// Varsayılan selamlama route'u
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the API!", // Artık dil çevirisi yok, doğrudan İngilizce mesaj
  });
});

// Server'ı başlatıyoruz
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
