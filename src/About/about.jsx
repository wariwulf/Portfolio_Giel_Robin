import React from 'react';
import Collapse from '../composant/collapse/collapse';
import "../About/about.scss";
import BannerPages from '../composant/banner-page/banner-pages';

const About = () => {

  const imagePath = process.env.PUBLIC_URL + '/kasa/jpeg-apropos.jpg';
  const className = "banner-about";

  return (
    <div className='about-page'>
        <BannerPages imagePath={imagePath} className={className}/>
        <div className='collapse-about'> 
            <Collapse
              title="Qui suis-je?"
              content="Passionné depuis longtemps des technologies modernes, j'ai d'abord arpenté des métiers
                      plus traditionnel. Bien qu'ayant aprécié ceux-ci et aillant grandement appris de ces expériences,
                      il me fallait accomplir ce cheminement vers les métier du web.
                      J'ai depuis lors cherché à assoifé ma soif de savoir et mon envie de maîtriser ce métier passionnant
                      qu'est le Développement Web."
            />
            <Collapse 
              title="Réalisations et Projet"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa.
                      Tout comportement discriminatoire ou de pertubation du voisinage entraînera
                      une exclusion de notre plateforme."
            />
            <Collapse
              title="Compétences"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa.
                      Tout comportement discriminatoire ou de pertubation du voisinage entraînera
                      une exclusion de notre plateforme."
            />
            <Collapse
              title="Objectif et aspirations"
              content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                      chaque logement correspond aux critères de sécurité établis par nos services.
                      En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes
                      de vérifier que les standars sont bien respectés. Nous organisons également des
                      ateliers sur la sécurité domestique pour nos hôtes."
            />
        </div> 
    </div>
  );
};

export default About;
