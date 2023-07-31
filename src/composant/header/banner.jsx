import React from 'react';

const Banner = ({ imagePath }) => {
  return (
    <div className="banner">
      <img src={imagePath} alt="Banner" />
    </div>
  );
};

export default Banner;
