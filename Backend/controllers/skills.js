const Skill = require('../models/skills');
const fs = require('fs');

exports.createSkills = (req, res) => {
    const tags = JSON.parse(req.body.tags);
    const achievements = req.body.achievements.split(';').map(achievements => achievements.trim());

    const skill = new Skill({
        title: req.body.title,
        level: req.body.level,
        achievements: achievements || [],
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        description: req.body.description || "", 
        tags: tags || []
    });

    skill.save()
    .then(() => {res.status(201).json({message: "Compétences enregistré!"})})
    .catch(error => {res.status(400).json({ error })})
  };
  


exports.modifSkills = (req, res) => {
    const skillsObject = req.file ? {
        ...JSON.parse(req.body.skills || '{}'),
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    const pictures = req.files ? req.files.map(file => `${req.protocol}://${req.get('host')}/pictures/${file.filename}`) : [];
    skillsObject.pictures = pictures;

    //delete skillsObject._userId;
    //Skill.findOne({ _id: req.params.id })
    //.then((skills) => {
    //    if (skills.userId !== req.auth.userId) {
   //         return res.status(401).json({ message: 'Non-autorisé!' });
    //    }

        Skill.updateOne({ _id: req.params.id }, { ...skillsObject, _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Compétence modifiée!' }))
            .catch(error => res.status(400).json({ error }));
    //})
    //.catch((error) =>
    //    res.status(400).json({ error }));

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
            // Vérifie si la compétence existe
            if (!skills) {
                return res.status(404).json({ message: 'Compétence non trouvée' });
            }

            // Supprime la compétence de la base de données et l'image associée
            const filename = skills.imageUrl ? skills.imageUrl.split('/images/')[1] : null;

            fs.unlink(`images/${filename}`, () => {
                Skill.deleteOne({ _id: req.params.id })
                    .then(() => { res.status(200).json({ message: 'Compétence supprimée !' }) })
                    .catch(error => res.status(401).json({ error }));
            });
        })
        .catch(error => {
            console.log(error); // Enregistrez l'erreur dans les journaux
            res.status(500).json({ error }); // Utilisation du code 500 ici
        });
};

module.exports = exports;