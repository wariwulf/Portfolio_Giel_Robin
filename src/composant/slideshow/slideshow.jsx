import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./slideshow.scss";

const Slideshow = ({ images, imageClassName, prevArrowClassName, nextArrowClassName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 1) {
    // Si une seule image, ne pas afficher les chevrons
    return (
      <div className="slideshow">
        <img src={images[0]} alt="Slideshow" className="slide" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <FaChevronLeft className={`arrow left ${prevArrowClassName}`} onClick={goToPreviousSlide} />
      <span className="counter">{`${currentIndex + 1}/${images.length}`}</span>
      <FaChevronRight className={`arrow right ${nextArrowClassName}`} onClick={goToNextSlide} />
      <img src={images[currentIndex]} alt="Slideshow" className={`slide ${imageClassName}`} />
    </div>
  );
};

export default Slideshow;
