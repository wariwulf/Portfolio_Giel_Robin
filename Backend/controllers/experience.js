// backend/controllers/experience.js

const Experience = require('../models/experience');
const fs = require('fs');

exports.createExperience = (req, res) => {
  const { title, company, startDate, endDate, description, link } = req.body;
  const achievements = req.body.achievements.split(';').map(achievements => achievements.trim());

  const experience = new Experience({
    title,
    company,
    startDate,
    endDate,
    description,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    achievements: achievements || [],
    link,
  });

  experience.save()
    .then(() => { res.status(201).json({ message: 'Expérience enregistrée!' }) })
    .catch(error => { res.status(400).json({ error }) });
};

exports.updateExperience = (req, res) => {
  const experienceObject = req.file ? {
    ...JSON.parse(req.body.experience),
    achievements: achievements || [],
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : { ...req.body };

  Experience.updateOne({ _id: req.params.id }, { ...experienceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Expérience modifiée!' }))
    .catch(error => res.status(401).json({ error }));
};

exports.getOneExperience = (req, res, next) => {
  Experience.findOne({
    _id: req.params.id
  }).then(
    (experience) => {
      res.status(200).json(experience);
    }
  ).catch(
    (error) => {
      res.status(404).json({ error });
    }
  );
};

exports.getAllExperience = (req, res) => {
  Experience.find()
    .then(experience => res.status(200).json(experience))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteExperience = (req, res, next) => {
  Experience.findOne({ _id: req.params.id })
    .then(experience => {
      if (!experience) {
        return res.status(404).json({ message: 'Expérience non trouvée' });
      }

      const filename = experience.image.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Experience.deleteOne({ _id: req.params.id })
          .then(() => { res.status(200).json({ message: 'Expérience supprimée !' }) })
          .catch(error => res.status(401).json({ error }));
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};
