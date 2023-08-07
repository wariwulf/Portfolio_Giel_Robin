import React, { useState, useEffect } from 'react';
import Cards from '../cards/cards';
import { getSkills } from '../../api/api';
import '../gallery/gallery.scss';
import AddSkillButton from '../form/form/formskills/skillsbuton';

const Gallery = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const fetchedSkills = await getSkills();
        setSkills(fetchedSkills);
      } catch (error) {
        console.error('Erreur lors de la récupération des compétences:', error);
      }
    };

    fetchSkills();
  }, []);

  // Vérifier si un token est présent dans le localStorage
  const isUserLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="gallery">
      <Cards data={skills} />

      {/* Afficher le bouton "Ajouter un skill" uniquement si l'utilisateur est connecté */}
      {isUserLoggedIn && <AddSkillButton />}
    </div>
  );
};

export default Gallery;
