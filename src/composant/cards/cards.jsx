import React from 'react';
import { Link } from 'react-router-dom';
import '../cards/card.scss';

function Cards({ data }) {

  if (!data || !Array.isArray(data)) {
    return null; // Ou retournez un message indiquant que les données sont vides
  }

  
  const cards = data.map((item) => (
    <Link to={`/card/${item._id}`} key={item._id}> 
      <Card
        title={item.title}
        level={item.level}
        imageUrl={item.image}
      />
    </Link>
  ));  
    return cards;
  }

  function Card({ title, level, imageUrl }) {
    const radius = 30; // Rayon du cercle
    const circumference = 2 * Math.PI * radius; // Circonférence du cercle

    const offset = circumference - (level / 100) * circumference; // Calcul de l'offset pour remplissage
    return (
        <div className="card">
            {/* Utilisez l'image de compétence comme image de fond */}
          <div className='card-image' style={{ backgroundImage: `url(${imageUrl})` }} />
          <div className="circle-container">
            <svg
              className="circle-svg"
              width={radius * 2}
              height={radius * 2}
              viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            >
              <circle
                className="circle-bg"
                cx={radius}
                cy={radius}
                r={radius - 2}
              ></circle>
              <circle
                className="circle-fill"
                cx={radius}
                cy={radius}
                r={radius - 2}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              ></circle>
            </svg>
            <div className="circle-content">
              <h2>{title}</h2>
            </div>
          </div>
          <p>Niveau : {level}%</p>
        </div>
    );
}

export default Cards;
