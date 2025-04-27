import React from 'react';

const ServiceImages = ({ images }) => (
  <section className="space-y-2 mt-[50px] ">
    <h3 className="font-medium text-purple-900 font-semibold">Service Images</h3>
    <div className="gap-10 ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.alt}
          className="w-full h-80 object-cover rounded-lg mb-[10px]"
        />
      ))}
    </div>
  </section>
);

export default ServiceImages;
