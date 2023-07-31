import React from "react";
import Cards from "../cards/cards";
import data from '../../data/logements.json';
import '../gallery/gallery.scss';

const Gallery = () => {
    return (
        <div className="gallery">
            <Cards data={data} />
        </div>
    );
}

export default Gallery;
