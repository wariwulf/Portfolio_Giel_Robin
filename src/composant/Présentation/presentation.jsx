import React from 'react';
import "../Présentation/presentation.scss"


function Presentation() {
    return (
        <div className="presentation">
            <div className="img-presentation">
                <img src="/kasa/robin.jpg" alt="Robin Giel" />
            </div>
            <div className="présentation-txt">
                <p>"Je passe mon temps à faire ce que je ne sais pas faire, pour apprendre à le faire."</p>
                <span>Pablo Picasso</span>
            </div>
        </div>
    );
}

export default Presentation;