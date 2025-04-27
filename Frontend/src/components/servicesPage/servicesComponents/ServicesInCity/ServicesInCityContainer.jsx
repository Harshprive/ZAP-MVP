import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServicesInCity";
import ServiceData from "./CityservicesData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // No need for pagination styles now
import { Autoplay } from "swiper/modules";

const ServicesInCityContainer = () => {
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

  return (
    <div className="max-w-[1200px] m-0 m-auto">
      <header className=" flex justify-between mb-">
                  <h1 className="self-start text-[#4f23b8] text-lg font-bold md:text-3xl mb-2 md:mb-8 w-[250px] md:w-[600px]">Cleaning services In City</h1>

                  
          {isMobile && (
        <Link
        className="text-[#4f23b8] md:hidden cursor-pointer"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "Merge" : "See all"}
      </Link>
      )}
                  
                </header>
       

      {isMobile ? (
        showAll ? (
          // Show all services in a list format when "See all" is clicked
          <div className="grid grid-cols-1 gap-4 mt-4">
            {ServiceData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                price={service.price}
                features={service.features}
                description={service.description}
                imageUrl={service.imageUrl}
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
            {ServiceData.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard
                  title={service.title}
                  price={service.price}
                  features={service.features}
                  description={service.description}
                  imageUrl={service.imageUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      ) : (
        // Default layout for larger screens (no changes)
        <div className="grid grid-cols-3 gap-8">
          {ServiceData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              price={service.price}
              features={service.features}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesInCityContainer;
