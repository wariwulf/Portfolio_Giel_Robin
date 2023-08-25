import React from 'react';
import Collapse from '../composant/collapse/collapse';
import "../About/about.scss";
import BannerPages from '../composant/banner-page/banner-pages';

const About = () => {

  const imagePath = process.env.PUBLIC_URL + '/QUI-SUIS-JE.jpg';
  const className = "banner-about";

  const achievementsContent = `Tout a commencé par la construction d'une interface utilisateur attrayante. Ce premier pas m'a permis de plonger dans le monde du design et de la créativité, et m'a donné un aperçu de l'importance de l'expérience utilisateur.
  
Cependant, ma soif d'apprentissage m'a poussé à entreprendre une formation approfondie chez OpenClassrooms. Au cours de cette formation, j'ai découvert les multiples facettes du développement web. J'ai eu l'opportunité de plonger dans le monde dynamique du JavaScript, en créant des projets interactifs qui ont renforcé ma compréhension des concepts fondamentaux.
  
J'ai également plongé dans l'optimisation des sites web et de leur référencement SEO. Comprendre comment rendre un site plus performant et visible dans les moteurs de recherche est devenu une compétence inestimable.
  
Un autre aspect passionnant de ma formation a été la planification de projets. J'ai appris à décomposer les tâches, à établir des échéanciers et à présenter mes idées de manière numérique. Cela m'a permis de mieux comprendre comment transformer une vision en réalité, tout en tenant compte des contraintes et des objectifs.
  
L'un des moments forts de ma formation a été la création d'un projet React à partir de zéro en utilisant Create React App (CRA). J'ai pu explorer la création d'interfaces réactives et interactives, tout en renforçant mes compétences en programmation JavaScript.
  
Cependant, mon aventure ne s'est pas limitée au frontend. J'ai également plongé dans le monde du backend en construisant un serveur complet en utilisant Node.js et Express. De la gestion des routes à l'implémentation de la logique métier, j'ai découvert l'importance d'une architecture solide pour soutenir les applications web.
  
En ce qui concerne mes projets futurs, j'ai des aspirations importantes. Je suis déterminé à intégrer la formation 'Développeur d'Application et de Logiciel' au CESI de Rouen pour continuer à élargir mes compétences et à m'immerger davantage dans le domaine du développement. Parallèlement, j'ai également entamé un projet personnel en développement, une initiative qui me permettra de mettre en pratique mes compétences et d'explorer de nouvelles opportunités.
  
Dans l'ensemble, mon parcours m'a permis de développer une passion pour la création et la résolution de problèmes à travers le développement web. Chaque projet, chaque défi, m'a aidé à grandir en tant que développeur et à me rapprocher de mon objectif d'excellence dans le domaine du web.`;



const quiSuisJeContent =`Passionné depuis longtemps par les technologies modernes, j'ai d'abord évolué dans des métiers plus traditionnels. Bien que j'aie apprécié ces expériences et en aie beaucoup appris, je ressentais le besoin de suivre ma passion pour le monde du web. Il m'était clair qu'accomplir ce parcours vers le domaine du développement était une nécessité.

Depuis lors, j'ai nourri ma soif de connaissance et mon désir de maîtriser ce métier fascinant qu'est le Développement Web. Mon parcours m'a conduit à explorer et à approfondir mes compétences, ainsi qu'à me plonger dans les défis stimulants qui caractérisent ce domaine dynamique.`;


const competenceContent= `Après avoir suivi la formation d'OpenClassrooms, j'ai acquis un ensemble de compétences essentielles qui me permettent de façonner le monde du développement web avec confiance et compétence. J'ai approfondi ma maîtrise du JavaScript, ce langage dynamique qui forme la base de nombreuses interactions interactives sur le web. Mes compétences en React m'ont permis de créer des interfaces réactives et intuitives, offrant une expérience utilisateur exceptionnelle.
                          
La gestion de projet n'est pas seulement une compétence technique, mais une approche qui me permet de planifier efficacement les tâches, de fixer des objectifs clairs et d'assurer une exécution fluide du début à la fin. J'ai également appris à optimiser les sites web pour les performances et à améliorer leur visibilité grâce aux techniques de référencement SEO.

Mon exploration de MongoDB et Node.js avec Express m'a ouvert les portes du backend, me permettant de construire des serveurs solides et efficaces pour soutenir mes applications. Ces compétences techniques sont renforcées par mes qualités non techniques, telles que ma capacité à apprendre rapidement, ma curiosité inextinguible et mon aptitude à résoudre les problèmes de manière créative.

Ces compétences acquises sont la pierre angulaire de mon parcours, et je suis déterminé à continuer à élargir mes horizons. Mes soft skills, comme ma résilience face aux défis, mon esprit collaboratif et ma volonté constante de m'améliorer, me permettront d'aborder avec enthousiasme de nouvelles technologies et de continuer à évoluer dans le monde en constante évolution du développement web. Je suis impatient d'appliquer mes compétences actuelles et mes qualités personnelles pour maîtriser les futurs défis et contribuer de manière significative à des projets passionnants.`;


const objectifContent = `Mes objectifs et aspirations reflètent ma passion inébranlable pour le domaine du développement web et mon désir de devenir un professionnel complet et compétent. Mon ambition ultime est d'acquérir toutes les compétences nécessaires pour maîtriser pleinement mon métier de développeur web. Je suis résolu à continuer à élargir mes connaissances techniques, à rester à jour avec les dernières tendances technologiques et à explorer de nouvelles approches pour créer des applications innovantes et convaincantes.

La réalisation de projets personnels occupe également une place centrale dans mon parcours. Je veux utiliser mon savoir-faire pour donner vie à des idées créatives et originales, en créant des applications et des sites web qui apportent une réelle valeur aux utilisateurs. Ces projets personnels seront autant d'occasions de mettre en pratique mes compétences, de relever des défis stimulants et d'affiner mon savoir-faire technique.

Cependant, je crois fermement que l'apprentissage ne se limite pas aux connaissances techniques. C'est pourquoi je suis déterminé à acquérir de l'expérience au sein d'une entreprise du secteur. Travailler en équipe, collaborer avec des collègues talentueux et être exposé à des projets variés seront autant d'opportunités d'apprendre et de grandir professionnellement. J'ai hâte de vivre l'environnement professionnel de la branche, d'apprendre des experts du domaine et de contribuer activement aux réussites de l'entreprise.

Mes aspirations s'étendent au-delà des compétences techniques. Je veux développer mon sens de l'adaptabilité, de la communication et de la résolution de problèmes. Mon désir de m'améliorer constamment et ma capacité à gérer les défis avec enthousiasme me permettront de surmonter les obstacles et d'évoluer dans cette industrie dynamique.

En somme, je suis déterminé à poursuivre mon cheminement pour devenir un développeur web accompli. Mon engagement envers l'apprentissage continu, la création de projets novateurs et l'acquisition d'une expérience professionnelle significative guidera ma trajectoire vers l'excellence dans le domaine du développement web.`;


  return (
    <div className='about-page'>
        <BannerPages imagePath={imagePath} className={className}/>
        <div className='collapse-about'> 
            <Collapse
              title="Qui suis-je?"
              content={quiSuisJeContent.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}  
            />
            <Collapse 
              title="Réalisations et Projet"
              content={achievementsContent.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            />
            <Collapse
              title="Compétences"
              content={competenceContent.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            />
            <Collapse
              title="Objectif et aspirations"
              content={objectifContent.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            />
        </div> 
    </div>
  );
};

export default About;
