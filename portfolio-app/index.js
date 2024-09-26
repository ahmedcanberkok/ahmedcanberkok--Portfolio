require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); // Path kütüphanesini ekleyelim


// Controller dosyalarını import ediyoruz
const skillController = require('./src/controllers/skillController');
const experienceController = require('./src/controllers/experienceController');
const educationController = require('./src/controllers/educationController');
const projectController = require('./src/controllers/projectController');

const app = express();

// Middleware'leri ekliyoruz
app.use(cors());
app.use(express.json());

// 'public' klasörünü statik dosya kökü olarak belirliyoruz
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'frontend', 'index.html')); 
});


// API route'larını tanımlıyoruz
app.get('/api/education', educationController.getEducation);
app.get('/api/experience', experienceController.getExperience);
app.get('/api/skills', skillController.getSkills);
app.get('/api/projects', projectController.getProjects);

// Ana sayfayı ('/') ziyaret eden kullanıcılar frontend'in 'index.html' dosyasını görsün


// Server'ı başlatıyoruz
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
