import React, { useState } from 'react';
import '../footer/footer.scss';
import { sendEmail } from '../../api/api';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendEmail(formData);
      if (response.success) {
        alert('Votre message a été envoyé avec succès!');
        // Réinitialiser le formulaire si nécessaire
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <footer className="footer" style={{ display: 'flex' }}>
      <div className="footer-content">
        <div className="contact-form">
          <h2>Contactez-moi</h2>
          <form onSubmit={handleSubmit}>
            <div className='top-form'>
              <div className='champs'>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className='champs'> 
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div> 
            </div>
            <div className='bottom-form'>
              <div className='champs'>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
