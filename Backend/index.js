require('dotenv').config();

const express = require('express');
const knex = require('knex')(require('./knexfile').development);
const cors = require('cors');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

// Controller dosyalarını import ediyoruz
const skillController = require('./src/controllers/skillController');
const experienceController = require('./src/controllers/experienceController');
const educationController = require('./src/controllers/educationController');
const projectController = require('./src/controllers/projectController');

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: './locales/{{lng}}/translation.json'
    },
    debug: true
  });


const app = express();
app.use(cors());
app.use(express.json());
app.use(middleware.handle(i18next));
app.use(express.static('public'));


// Education verisini çeken route
app.get('/api/education', educationController.getEducation);

// Experience verisini çeken route
app.get('/api/experience', experienceController.getExperience);

// Skills verisini çeken route
app.get('/api/skills', skillController.getSkills);

// Projects verisini çeken route
app.get('/api/projects', projectController.getProjects);


// Varsayılan dilde selamlama route'u
app.get('/', (req, res) => {
  res.json({
    message: req.t('welcome_message')
  });
});



// API endpoint örneği: Dil desteği için örnek
app.get('/', (req, res) => {
  res.json({
    message: req.t('welcome_message'), // Dil dosyalarındaki "welcome_message" anahtarını çeker
  });
});

// Server'ı başlatma
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});