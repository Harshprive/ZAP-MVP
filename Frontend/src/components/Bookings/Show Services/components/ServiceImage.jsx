import React from "react";

const ServiceImage = ({ src, alt }) => (
  <div className="w-full h-90 overflow-hidden rounded-lg  ">
    <img src={src} alt={alt} className="w-full h-full object-fit" />
  </div>
);

export default ServiceImage;
