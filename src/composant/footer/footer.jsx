import React from 'react';
import '../footer/footer.scss';


const Footer = () => {
    const desktopImage = process.env.PUBLIC_URL + '/kasa/footer_desktop.png';
    const mobileImage = process.env.PUBLIC_URL + '/kasa/footer-Mobile.png';
    const isMobile = window.innerWidth <= 768; // Vérifie si la largeur de l'écran est inférieure ou égale à 768 pixels (vous pouvez ajuster cette valeur selon vos besoins)

  return (
    <footer className="footer" style={{ display: 'flex' }}>
      <div className="footer-content">
        <img src={isMobile ? mobileImage : desktopImage} alt="Kasa, tout droit réservé." className="footer-img" />
      </div>
    </footer>
  );
};

export default Footer;