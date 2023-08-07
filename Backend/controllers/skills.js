const Skill = require('../models/skills');
const fs = require('fs');

exports.createSkills = (req, res) => {

    const skillObject = JSON.parse(req.body.skill);
    delete skillObject._id;
    delete skillObject._userId;
    const skill = new Skill({
      ...skillObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    });

    // Enregistre la nouvelle compétence dans la base de données
    skill
      .save()
      .then(() => {
        res.status(201).json({ message: 'Compétence enregistrée!' });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
};


exports.modifSkills = (req, res) => {
    const skillsObject = req.file ? {
        ...JSON.parse(req.body.skills),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    delete skillsObject._userId;
    Skill.findOne({ _id: req.params.id })
        .then((skills) => {
            if (skills.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non-autorisé!' });
            } else {
                Skill.updateOne({ _id: req.params.id }, { ...skillsObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Compétence modifiée!' }))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) =>
            res.status(400).json({ error }));
};

exports.getOneSkills = (req, res, next) => {
    Skill.findOne({
        _id: req.params.id
    }).then(
        (skills) => {
            res.status(200).json(skills);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.getAllSkills = (req, res) => {
    Skill.find()
        .then(skills => res.status(200).json(skills))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteSkills = (req, res, next) => {
    Skill.findOne({ _id: req.params.id })
        .then(skills => {
            // Vérifie si l'utilisateur actuel est autorisé à supprimer cette compétence
            if (!skills) {
                return res.status(404).json({ message: 'Compétence non trouvée' });
            }

            if (skills.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non autorisé' });
            } else {
                // Supprime la compétence de la base de données et l'image associée
                const filename = skills.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Skill.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Compétence supprimée !' }) })
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

module.exports = exports;