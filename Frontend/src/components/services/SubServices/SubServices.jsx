import React from 'react';
import { useState ,useEffect} from 'react';
import NearYouCardContainer from '../../servicesPage/servicesComponents/NearYou/NearYouCardContainer'



import ServiceinYourCity from '../../servicesPage/servicesComponents/ServicesInCity/ServicesInCityContainer'
import './SubServices.css'

import RequestServiceCard from "../../../components/servicesPage/servicesComponents/servicesRequest/ServiceRequest";
import RequestserviceData from "../../../components/servicesPage/servicesComponents/servicesRequest/ServiceRequestData";
import WorkRequestPopUp from '../../WorkGallary/WorkGallaryRequestPopUp';
import BookingConfirmation from '../../Bookings/ConfirmBooking/ConfirmBooking';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // No need for pagination styles now
import { Autoplay } from "swiper/modules";
const SubServices = () => {
  /***************Request Service********** */
 const [isMobile, setIsMobile] = useState(false);
 const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const [showPopUp, setShowPopUp] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [activeService, setActiveService] = useState(null); // Track which service triggered the popup

  const handleRequestClick = (service) => {
    setActiveService(service); // Set the service that triggered the popup
    setShowPopUp(true);
  };

  const handlePopupSuccess = () => {
    setShowPopUp(false); // Close the form popup
    setShowConfirmation(true); // Show the confirmation popup
    setTimeout(() => {
      setShowConfirmation(false);
    }, 4000); // 30,000 ms = 30 seconds
  };

  
  /***************Request Service********** */
  
  return (
    <div className='justify-self-center pt-[30px] w-[94%] md:w-[80%]'>
    <div className="Home-India">Home/India/<span>City</span></div>

{/*NEAR YOU***************************************************************** */}
    <div className="NearYou">
        <div className="NearYou-Heading">
          <h1>Near You</h1>
          <Link to="/services/near-you-page" className="see-all">see all
          </Link>
      
        </div>
        <div className="NearYou-card">
          <NearYouCardContainer/>
            

        </div>
    </div>

    <div className="mt-[50px]">
      
      
        <ServiceinYourCity/>
     
    </div>

    {/*Service Request******************** */}
    <div className="max-w-[1200px] m-0 m-auto">
      <header className="text-center mt-6">
        <h1 className="text-[#4f23b8] md:text-3xl text-lg font-semibold mb-4">
          Request to Service Provider
        </h1>
        <p>Find and request services from our top professionals</p>
      </header>

      {isMobile && (
        <div className="md:hidden h-[25px] justify-self-end">
          <Link
            className="text-[#4f23b8] md:hidden cursor-pointer"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Merge" : "See all"}
          </Link>
        </div>
      )}

      {isMobile ? (
        showAll ? (
          // Show all services in a list format when "See all" is clicked
          <div className="grid grid-cols-1 gap-4 mt-4">
            {RequestserviceData.map((service) => (
              <RequestServiceCard
                key={service.id}
                service={service}
                onRequestClick={() => handleRequestClick(service)}
              />
            ))}
          </div>
        ) : (
          // Swiper for mobile view
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="w-full"
          >
            {RequestserviceData.map((service) => (
              <SwiperSlide key={service.id}>
                <RequestServiceCard
                  key={service.id}
                  service={service}
                  onRequestClick={() => handleRequestClick(service)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      ) : (
        // Default layout for larger screens (no changes)
        <div className="requests">
          {RequestserviceData.map((service) => (
            <RequestServiceCard
              key={service.id}
              service={service}
              onRequestClick={() => handleRequestClick(service)}
            />
          ))}
        </div>
      )}
    </div>
{/* WorkRequestPopUp */}
{showPopUp && (
        <WorkRequestPopUp
          service={activeService} // Pass the active service details
          onClose={() => setShowPopUp(false)}
          onSuccess={handlePopupSuccess}
        />
      )}
      {/* BookingConfirmation */}
      {showConfirmation && (
        <BookingConfirmation onClose={() => setShowConfirmation(false)} />
      )}

  
</div>
  )
}

export default SubServices
