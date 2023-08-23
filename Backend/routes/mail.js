const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mail');

// Route pour envoyer un e-mail
router.post('/', mailController.sendEmail);

module.exports = router;