// backend/models/skill.js
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: Number, required: true, min: 0, max: 100 },
  achievements: { type: [String], required: true },
  image: { type: String, required: true }
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
