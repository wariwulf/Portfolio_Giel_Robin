const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const UPLOADS_DIR = path.join(__dirname, '../images');

const skillsRoutes = require('./routes/skills');
const userRoutes = require('./routes/user');
const experienceRoutes = require('./routes/experience');

mongoose.connect("mongodb+srv://robin:jeanne123@cluster2.fkbry7i.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connexion à MongoDB réussie');
}).catch(error => {
  console.error('Erreur lors de la connexion à MongoDB :', error);
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Middleware pour traiter les données JSON dans les requêtes
app.use(cors());

app.use('/api/skills', skillsRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/experience', experienceRoutes);

app.use('/images', express.static(UPLOADS_DIR));

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
