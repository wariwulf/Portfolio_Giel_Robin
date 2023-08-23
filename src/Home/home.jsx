import React from 'react';
import Gallery from '../composant/gallery/gallery';
import "../Home/home.scss";
import BannerPages from '../composant/banner-page/banner-pages';
import Presentation from '../composant/Présentation/presentation';

    const Home = () => {
        const imagePath = `${process.env.PUBLIC_URL}/kasa/competence.jpg`;
        const className = "banner-home";

        const textDesktop = 'Présentation de mes compétences';
        const textMobile = ['Présentation de', 'mes compétences'];

        const isDesktop = window.innerWidth > 768; // Vérifie si l'affichage est en mode bureau (largeur > 768px)

        const text = isDesktop ? textDesktop : textMobile; // Utilise textDesktop si c'est un affichage bureau, sinon textMobile

        return (
            <div className='main'>
                <Presentation/>
                <BannerPages imagePath={imagePath} className={className} text={text} />
                <Gallery />
            </div>
        );
    };

export default Home;