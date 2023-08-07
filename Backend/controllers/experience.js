// backend/controllers/experience.js

const Experience = require('../models/experience');
const fs = require('fs');

exports.createExperience = (req, res) => {
  const experienceObject = JSON.parse(req.body.experience);
  delete experienceObject._id;
  delete experienceObject._userId;
  const experience = new Experience({
    ...experienceObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });

  experience.save()
    .then(() => { res.status(201).json({ message: 'Expérience enregistrée!' }) })
    .catch(error => { res.status(400).json({ error }) });
};

exports.updateExperience = (req, res) => {
  const experienceObject = req.file ? {
    ...JSON.parse(req.body.experience),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : { ...req.body };

  delete experienceObject._userId;
  Experience.findOne({ _id: req.params.id })
    .then((experience) => {
      if (experience.userId != req.auth.userId) {
        res.status(401).json({ message: 'Non-autorisé!' });
      } else {
        Experience.updateOne({ _id: req.params.id }, { ...experienceObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Expérience modifiée!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
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

      if (experience.userId != req.auth.userId) {
        res.status(401).json({ message: 'Non autorisé' });
      } else {
        const filename = experience.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Experience.deleteOne({ _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Expérience supprimée !' }) })
            .catch(error => res.status(401).json({ error }));
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};
