import React from 'react';
import { Link } from 'react-router-dom';
import '../cards/card-pro.scss';

function ExperienceCards({ experiences }) {
  console.log("Experience Cards data:", experiences);

  if (!experiences || !Array.isArray(experiences)) {
    return null; // Ou retournez un message indiquant que les données sont vides
  }

  const cards = experiences.map((experience) => (
    console.log("Experience ID:", experience._id),
    <Link to={`/card-pro/${experience._id}`} key={experience._id}> {/* Assurez-vous que la prop "key" est définie ici */}
      <ExperienceCard
        title={experience.title}
        description={experience.description}
        imageUrl={experience.image}
      />
    </Link>
  )); 
  

  return <div className="experience-cards">{cards}</div>;
}

function ExperienceCard({ title, description, imageUrl }) {
  return (
    <div className="card-pro">
      <div className='card-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ExperienceCards;