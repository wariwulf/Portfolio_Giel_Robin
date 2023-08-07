// backend/models/experience.js
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String, required: true }
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
