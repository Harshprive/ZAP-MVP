

import galleryData from './GallleryImage.js'; 

export const fetchGalleryData = async () => {
  // Simulating an async fetch operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(galleryData); // Resolving the data after a delay
    }, 1000); // Simulate 1 second delay
  });
};
