// src/components/WorkGalleryImage.js
import React from 'react';

const WorkGalleryImage = ({ image }) => {
  return (
    <div className="aspect-square overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default WorkGalleryImage;
