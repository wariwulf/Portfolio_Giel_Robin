const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const skillsCtrl = require('../controllers/skills');

router.post('/', auth, multer.upload, multer.resizeAndSaveImage, skillsCtrl.createSkills);
router.put('/:id', auth, multer.upload, multer.resizeAndSaveImage, skillsCtrl.modifSkills);
router.get('/:id', skillsCtrl.getOneSkills);
router.get('/', skillsCtrl.getAllSkills);
router.delete('/:id', auth, skillsCtrl.deleteSkills);


module.exports = router;
  