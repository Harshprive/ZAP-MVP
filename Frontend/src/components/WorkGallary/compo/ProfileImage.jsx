// src/components/ProfileImage.js
import React from 'react';

const ProfileImage = ({ imageSrc }) => {
  return (
    <div className="relative">
      <img
        src={imageSrc}
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white text-sm">✓</span>
      </div>
    </div>
  );
};

export default ProfileImage;
