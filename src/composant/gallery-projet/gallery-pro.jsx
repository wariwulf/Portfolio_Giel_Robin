import React, { useState, useEffect } from 'react';
import ExperienceCards from '../cards/cards-pro'; // Assurez-vous d'avoir le bon chemin vers ExperienceCards
import { getExperiences } from '../../api/api'; // Assurez-vous d'importer la fonction de récupération des expériences
import '../gallery-projet/galery-pro.scss';
import AddProButton from '../form/projetform/addProButton';

const ExperienceGallery = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const fetchedExperiences = await getExperiences(); // Utilisez la fonction pour récupérer les expériences
        setExperiences(fetchedExperiences);
      } catch (error) {
        console.error('Erreur lors de la récupération des expériences:', error);
      }
    };

    fetchExperiences();
  }, []);

  // Vérifier si un token est présent dans le localStorage
  const isUserLoggedIn = !!localStorage.getItem('token');
  
  console.log("Experience Gallery experiences:", experiences); 
  return (
    <div className="gallery-pro">
        <AddProButton/>
        <ExperienceCards experiences={experiences} /> {/* Passez les expériences au composant ExperienceCards */}
      
        <AddProButton/>
    </div>
  );
};

export default ExperienceGallery;
