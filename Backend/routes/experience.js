// backend/routes/experience.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const { upload, resizeAndSaveImage } = require('../middleware/multer-config');

const experienceCtrl = require('../controllers/experience');

router.post('/', auth, upload.single('file'), resizeAndSaveImage, experienceCtrl.createExperience);
router.put('/:id', auth, upload.single('file'), resizeAndSaveImage, experienceCtrl.updateExperience);
router.get('/:id', experienceCtrl.getOneExperience);
router.get('/', experienceCtrl.getAllExperience);
router.delete('/:id', auth, experienceCtrl.deleteExperience);

module.exports = router;
