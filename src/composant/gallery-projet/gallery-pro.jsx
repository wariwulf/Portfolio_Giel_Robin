import React, { useState, useEffect } from 'react';
import ExperienceCards from '../cards/cards-pro'; 
import { getExperiences } from '../../api/api'; 
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
  
  return (
    <div className="gallery-pro">
        {isUserLoggedIn && <AddProButton/>}
        <ExperienceCards experiences={experiences} />
    </div>
  );
};

export default ExperienceGallery;
