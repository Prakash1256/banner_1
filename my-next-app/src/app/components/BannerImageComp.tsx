"use client"; 

import React from 'react';


interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div className="banner-container" style={{ backgroundColor: background }}>
      <img src={image} alt={title} className="banner-image" />
      <h2 className="banner-title">{title}</h2>
      <p className="banner-description">{description}</p>
      <button className="banner-cta">{cta}</button>
      <button onClick={onEdit} className="banner-edit-button">✏️</button>
    </div>
    
  );
};

export default BannerImageComp;
