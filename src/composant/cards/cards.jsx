import React from 'react';
import { Link } from 'react-router-dom';
import '../cards/card.scss';

function Cards({ data }) {
    const cards = data.map((item) => (
        <Link to={`/card/${item.id}`} key={item.id}>
            <Card
                key={item.id}
                title={item.title}
                cover={item.cover}
            />
        </Link>    
    ));
  
    return cards;
  }

function Card({ title, cover, description }) {
  return (
    <div className="card">
      <img className='card-image' src={cover} alt={title} />
      <h2>{title}</h2>
      {/* Ajoutez d'autres éléments de votre carte, par exemple, la note, l'emplacement, etc. */}
    </div>
  );
}

export default Cards;
