import React from "react";
import { Link } from "react-router-dom";
import "./ServiceRequest.css";

const ServiceCard = ({ service, onRequestClick }) => {
  return (
    <div className="request-card">
      <div className="request-card-header">
        <h3 className="service-title">{service.title}</h3>
        <span className="service-category">{service.category}</span>
      </div>
      <div className="card-body">
        <Link to="/services/work-gallery">
          <div className="service-request-profile-section">
            <img
              src={service.profilePic}
              alt={service.name}
              className="service-request-profile-pic"
            />
            <div className="service-request-profile-info">
              <h4 className="service-request-profile-name">{service.name}</h4>
              <div className="service-request-profile-rating">
                ★★★★★ ({service.rating})
              </div>
              <div className="service-request-profile-status">
                {service.status}
              </div>
            </div>
          </div>
        </Link>
        <p className="service-description">{service.description}</p>
        <div className="request-service-details">
          <div className="detail-item">
            <div className="detail-label">Experience</div>
            <div className="detail-value">{service.experience}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Projects</div>
            <div className="detail-value">{service.projects}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Rate</div>
            <div className="detail-value">{service.rate}</div>
          </div>
        </div>
        <button
          className="request-service-button"
          onClick={onRequestClick} // Use the passed prop
        >
          Request Service
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
