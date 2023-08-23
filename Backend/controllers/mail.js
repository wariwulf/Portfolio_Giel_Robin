const nodemailer = require('nodemailer');

// Fonction pour envoyer un e-mail
exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Créer un transporteur de messagerie
    const transporter = nodemailer.createTransport({
      service: 'hotmail', // Ou configurez vos propres paramètres SMTP
      auth: {
        user: 'portcont@hotmail.com', // Votre adresse e-mail
        pass: 'Jeanne#1957', // Votre mot de passe
      },
      tls: {
        rejectUnauthorized: false, // Ajoutez cette option pour accepter les certificats auto-signés
      },
    });

    // Configurer l'e-mail
    const mailOptions = {
      from: 'portcont@hotmail.com',
      to: 'robin.giel@hotmail.com', // Adresse e-mail de destination
      subject: 'Nouveau message de contact',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Envoyer l'e-mail
    await transporter.sendMail(mailOptions);

    // Répondre au client avec succès
    res.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    res.status(500).json({ success: false, error: 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail.' });
  }
};
