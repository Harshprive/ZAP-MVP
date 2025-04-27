import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ServicesInCity.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ServicePopUp from '../../../Bookings/ServicesPopUp';

const ServiceCard = ({ title, features, description, imageUrl }) => {

  /*for handling popup events*/ 
  const [popupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} className="service-image" />
      <div className="service-content">
        <h3 className="service-title">{title}</h3>

        <div className="features">
          {features.map((feature, index) => (
            <p key={index} className="feature-item">
              <ChevronRightIcon />
              {feature}
            </p>
          ))}
        </div>
        <p className="service-description">{description}</p>
        <Link
          to={`/search-booking/`} // Navigate to the search-booking route
          state={{ serviceName: title }} // Pass the service name via state
          className="service-link"
        >
        <button onClick={handlePopupOpen}>
        Find Service
        </button>
          

       </Link>
      </div>

      
    </div>
  );
};

export default ServiceCard;
