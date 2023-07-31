import React from 'react';
import "../Error/error.scss";



const Error = () => {
  return (
    <div className='error'>
      <div className='img-err'>
        <h2 className='error-404'  alt='Erreur de navigation'>
          404
        </h2>
      </div>
      <p>Oups! La page que <br/> vous demandez n'existe pas.</p>
      <a href='/'>Retourner sur la page d'acceuil</a>
    </div>
  );
};

export default Error;
