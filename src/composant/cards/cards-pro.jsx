import React from 'react';
import { Link } from 'react-router-dom';
import '../cards/card-pro.scss';

function ExperienceCards({ experiences }) {

  if (!experiences || !Array.isArray(experiences)) {
    return null; 
  }

  const cardsPro = experiences.map((experience) => (
    <Link to={`/card-pro/${experience._id}`} key={experience._id} className='lien-pro'>
      <ExperienceCard
        title={experience.title}
        company={experience.company}
        imageUrl={experience.image}
        dateStart={experience.startDate}
        dateEnd={experience.endDate}
      />
    </Link>
  ));
  
  

  return cardsPro;
}

function ExperienceCard({ title, company, imageUrl, dateStart, dateEnd }) {
  const formattedStartDate = new Date(dateStart).toLocaleDateString('fr-FR');
  const formattedEndDate = new Date(dateEnd).toLocaleDateString('fr-FR');

  return (
    <div className="card-pro">
      <div className='card-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="card-content">
        <h2>{title}</h2>
        <span>{company}</span>
        <div className='date'>
          <p>Début:{formattedStartDate}</p>
          <p>Fin:{formattedEndDate}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCards;