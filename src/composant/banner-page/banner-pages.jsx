import React from 'react';

const BannerPages = ({ imagePath, className, text }) => {
  return (
    <div className={`${className}`}>
        <img src={imagePath} alt="Banner" className="image" />
        {text && <div className="text-overlay">{text}</div>}
    </div>
  );
};

export default BannerPages;
