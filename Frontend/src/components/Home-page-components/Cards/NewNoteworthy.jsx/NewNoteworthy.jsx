const ServiceCard = ({ service }) => {
    return (
      <div className="NEW-AND-NOTEWORTHY-card">
        <div className="overlay"></div>
        <img 
          src={service.img} 
          alt={service.title} 
          className="NEW-AND-NOTEWORTHY-card-img" 
        />
        <div className="NEW-AND-NOTEWORTHY-text-info-button">
          <h3>{service.title}</h3>
          <button className="explore-btn">Explore</button>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;
  