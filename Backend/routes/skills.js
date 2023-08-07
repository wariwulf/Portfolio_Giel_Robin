const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const { upload, resizeAndSaveImage } = require('../middleware/multer-config');


const skillsCtrl = require('../controllers/skills');

router.post('/', auth, upload.single('file'), resizeAndSaveImage, skillsCtrl.createSkills);
router.put('/:id', auth, upload.single('file'), resizeAndSaveImage, skillsCtrl.modifSkills);
router.get('/:id', skillsCtrl.getOneSkills);
router.get('/', skillsCtrl.getAllSkills);
router.delete('/:id', auth, skillsCtrl.deleteSkills);


module.exports = router;
  