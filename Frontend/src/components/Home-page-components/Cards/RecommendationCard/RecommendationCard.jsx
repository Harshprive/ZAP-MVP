import React from 'react';
import './Recommendation.css'; // External CSS file for styling


const RecommendationCard = ({ service }) => {
  return (
    <div className="RecommendationCard">
      <img src={service.image} alt={service.title} className="RecommendationCard-image" />
      <div className="RecommendationCard-content">
        <div className="RecommendationCard-header">
          <h3>{service.title}</h3>
          <span className="RecommendationCard-rating">⭐ {service.rating}</span>
        </div>
        <p className="RecommendationCard-description">{service.description}</p>
        <p className="RecommendationCard-price">
          <span>Starting Price: </span><strong>₹{service.price}/hr</strong>
        </p>
        <button className="book-now-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default RecommendationCard;
