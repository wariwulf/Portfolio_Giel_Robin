import React from 'react';
import Gallery from '../../composant/gallery/gallery';
import "../projet/projet.scss";
import Presentation from '../../composant/Présentation/presentation';
import ExperienceGallery from '../../composant/gallery-projet/gallery-pro';


function Projet () {
    return (
        <div className='projet-container'>
            <Presentation/>
            <ExperienceGallery/>
        </div>
    )
}

export default Projet;