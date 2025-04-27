import React, { useState, useEffect } from "react";
import "./ServicesCard.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
};

const services = [
  { name: "Sofa", image: "https://th.bing.com/th/id/OIP.SvaQWQr-yfTG7AHHRovGcAHaE8?rs=1&pid=ImgDetMain" },
  { name: "Plumber", image: "https://th.bing.com/th/id/R.46bb11a00838f4db62d3ad15d0ba0e69?rik=BOBQAayP2nsBbQ&riu=http%3a%2f%2fbetterhousekeeper.com%2fwp-content%2fuploads%2f2019%2f09%2ffixing-plumbing-system.jpg&ehk=pXQWSFbz0sYAM7oZIkQlzYR5YEeNUnI9yOgCFGwMxB8%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Cleaning", image: "https://www.investopedia.com/thmb/nYNEB6sAHK2PzqXkFpcubLwqd7Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Primary-Image-how-much-does-cleaning-business-insurance-cost-7551611-6d0acf8dddd9441892da86b1713e274b.jpg" },
  { name: "Carpentry", image: "https://www.2dodone.com/wp-content/uploads/2018/06/5-carpentry-tips-beginners.jpg" },
  { name: "Painting", image: "https://th.bing.com/th/id/OIP.JKLcCsZoh85hHHfNOlm_MgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

const ServiceCard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={isMobile}
      autoPlaySpeed={2000}
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      className="carousel-container"
    >
      {services.map((service, index) => (
        <Link key={index} to="/services">
          <div className="Home-page-services-card">
            <img src={service.image} alt={service.name} className="Home-page-services-card-image" />
            <p className="Home-page-services-card-title">{service.name}</p>
            <div className="Home-page-services-card-hover-content">
              <div className="Home-page-get-service-btn">Get Service</div>
              <ArrowForwardIcon sx={{ fontSize: 50, fontWeight: 900 }} className="right-arrow" />
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
  ) : (
    <div className="Home-page-services-card-container">
      <div className="Home-page-services-cards">
        {services.map((service, index) => (
          <Link key={index} to="/services">
            <div className="Home-page-services-card">
              <img src={service.image} alt={service.name} className="Home-page-services-card-image" />
              <p className="Home-page-services-card-title">{service.name}</p>
              <div className="Home-page-services-card-hover-content">
                <div className="Home-page-get-service-btn">Get Service</div>
                <ArrowForwardIcon sx={{ fontSize: 50, fontWeight: 900 }} className="right-arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
