import "../cards-details/cards-details-pro.scss";
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Collapse from '../composant/collapse/collapse'; // Assurez-vous d'avoir le bon chemin vers Collapse
import Slideshow from '../composant/slideshow/slideshow'; // Assurez-vous d'avoir le bon chemin vers Slideshow
import { getOneExperience, deleteExperience } from '../api/api'; // Assurez-vous d'importer les fonctions nécessaires
import ModProButton from "../composant/form/projetform/modProButton";
import { API_ROUTES, APP_ROUTES } from "../constants";


const CardsDetailsPro = () => {
  const { _id } = useParams();
  const [experienceData, setExperienceData] = useState(null);
  const PUBLIC_URL = process.env.PUBLIC_URL;


  const handleDelete = async () => {
    try {
      await deleteExperience(experienceData._id);
      return <Link to={APP_ROUTES.PROJET}>Retour à la gallery</Link>;
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const data = await getOneExperience(_id);
        const formattedStartDate = new Date(data.startDate).toLocaleDateString('fr-FR');
        const formattedEndDate = new Date(data.endDate).toLocaleDateString('fr-FR');
        const descriptionLines = data.description.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ));
        setExperienceData({
          ...data,
          formattedStartDate,
          formattedEndDate,
          descriptionLines,
        });
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchExperienceData();
  }, [_id]);

  if (!experienceData) {
    return <p>Loading...</p>; // Ou tout autre indicateur de chargement
  }

  const isUserLoggedIn = !!localStorage.getItem('token');


return (
    <div className='cards-details-pro'>
            <div className='carousel'>
                <Slideshow
                    images={[experienceData.image]}
                    imageClassName="slideshow-image"
                    prevArrowClassName="slideshow-arrow prev-arrow"
                    nextArrowClassName="slideshow-arrow next-arrow"
                />
            </div>
            <div className="buttonsPro">
              {isUserLoggedIn && <ModProButton experienceId={experienceData.id}/>}
              {isUserLoggedIn && <button onClick={handleDelete} className="button-delPro">Supprimer</button>}
            </div>  
            <div className='header-pro'>   
                <div className='loc'>                  
                    <h2>{experienceData.title}</h2>
                    <h3 className="entreprise">{experienceData.company}</h3>
                </div>
                <div className="info">
                  <div className="dates">
                      <span>Date de début: {experienceData.formattedStartDate}</span>
                      <span>Date de fin: {experienceData.formattedEndDate}</span>
                  </div>
                  <a href={experienceData.link} target="_blank">
                    Lien vers le repo du projet
                    <img className="img-link" src={`${process.env.PUBLIC_URL}/pngimg.com - github_PNG80.png`} alt="GitHub Repository" /> 
                  </a>
                </div>
            </div>
            <div className='coll'>
                <div className='coll-1'>
                    <Collapse
                    title="Description"
                    content={experienceData.descriptionLines}
                    titleClassName="collapse-title"
                    contentClassName="collapse-content"
                />
            </div>
            <div className='coll-2'>
                <Collapse
                title="Réalisations"
                content={
                    <ul>
                    {experienceData.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                    </ul>
                }
                titleClassName="collapse-title"
                contentClassName="collapse-content"
                />
            </div>
        </div>  
    </div>
  );
};

export default CardsDetailsPro;
