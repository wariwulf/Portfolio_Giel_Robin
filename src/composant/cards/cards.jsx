import React from 'react';
import { Link } from 'react-router-dom';
import '../cards/card.scss';

function Cards({ data }) {

  if (!data || !Array.isArray(data)) {
    return null; // Ou retournez un message indiquant que les données sont vides
  }

  
    const cards = data.map((item) => (
        <Link to={`/card/${item.id}`} key={item.id}>
            <Card
                key={item.id}
                title={item.title}
                level={item.level}
                imageUrl={item.imageUrl}
            />
        </Link>    
    ));
  
    return cards;
  }

  function Card({ title, level, imageUrl }) {
    return (
        <div className="card">
            {/* Utilisez l'image de compétence comme image de fond */}
            <div className='card-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <h2>{title}</h2>
            <p>Niveau : {level}</p>
            {/* Ajoutez d'autres éléments de votre carte, par exemple, la description, etc. */}
        </div>
    );
}

export default Cards;
