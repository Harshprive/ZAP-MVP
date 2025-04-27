import React from 'react';
import './RcomendationCard.css'; // External CSS file for styling


const Card = ({ service }) => {
  return (
    <div className="card">
      <img src={service.image} alt={service.title} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <h3>{service.title}</h3>
          <span className="card-rating">⭐ {service.rating}</span>
        </div>
        <p className="card-description">{service.description}</p>
        <p className="card-price">
          <span>Starting Price: </span><strong>₹{service.price}/hr</strong>
        </p>
        <button className="book-now-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Card;
