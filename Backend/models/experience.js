// backend/models/experience.js
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String, required: true },
  image: { type: String, required: true },
  achievements: { type: [String], required: true },
  link: { type: String }
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
