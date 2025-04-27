import React, { useState, useEffect } from "react";
import "./services.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import NewNoteworthy from "../../Home-page-components/Cards/NewNoteworthy.jsx/NewNoteworthy";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // No need for pagination styles now
import { Autoplay } from "swiper/modules";





/*import cards**********/
import BestShopCard from'../../Home-page-components/Cards/Best-Shop-Card/Bestshop';
import RecommendationCard from '../../Home-page-components/Cards/RecommendationCard/RecommendationCard';
import RecommendationData from '../../Home-page-components/Cards/RecommendationCard/Recommendation'
import ServiceCard from "./components/ServiceCard";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
};
// Static list of cards
const services = [
  { name: "Sofa", image: "https://th.bing.com/th/id/OIP.SvaQWQr-yfTG7AHHRovGcAHaE8?rs=1&pid=ImgDetMain" },
  { name: "Plumber", image: "https://th.bing.com/th/id/R.46bb11a00838f4db62d3ad15d0ba0e69?rik=BOBQAayP2nsBbQ&riu=http%3a%2f%2fbetterhousekeeper.com%2fwp-content%2fuploads%2f2019%2f09%2ffixing-plumbing-system.jpg&ehk=pXQWSFbz0sYAM7oZIkQlzYR5YEeNUnI9yOgCFGwMxB8%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Cleaning", image: "https://www.investopedia.com/thmb/nYNEB6sAHK2PzqXkFpcubLwqd7Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Primary-Image-how-much-does-cleaning-business-insurance-cost-7551611-6d0acf8dddd9441892da86b1713e274b.jpg" },
  { name: "Carpentry", image: "https://www.2dodone.com/wp-content/uploads/2018/06/5-carpentry-tips-beginners.jpg" },
  { name: "Painting", image: "https://th.bing.com/th/id/OIP.JKLcCsZoh85hHHfNOlm_MgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

/*for  shop card detail***********************************************************/
const shops = [
  {
    id: 1,
    name: "The Coffee House",
    category: "Cafe",
    description:
      "Artisanal coffee shop serving premium brews, pastries, and light meals in a cozy atmosphere.",
    location: "Downtown",
    openingTime: "Opens 7 AM",
    rating: "★★★★★",
    reviews: 128,
    status: "Open Now",
    statusClass: "status-open",
    image:
      "https://www.shutterstock.com/image-photo/adult-couple-entrepreneurs-man-woman-260nw-2368512205.jpg",
  },
  {
    id: 2,
    name: "Fresh Market",
    category: "Grocery",
    description:
      "Local market offering fresh produce, organic foods, and specialty items from local farmers.",
    location: "Westside",
    openingTime: "Opens 8 AM",
    rating: "★★★★☆",
    reviews: 96,
    status: "Open Now",
    statusClass: "status-open",
    image: "https://th.bing.com/th/id/OIP.dODBzogvlzHw-fWHtfzVlQHaEZ?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "Tech Hub",
    category: "Electronics",
    description:
      "Your one-stop shop for electronics, gadgets, and expert tech support services .",
    location: "Mall Plaza",
    openingTime: "Opens 10 AM",
    rating: "★★★★★",
    reviews: 245,
    status: "Closed",
    statusClass: "status-closed",
    image: "https://i.pinimg.com/736x/47/bf/78/47bf78ace1b1240120386eb2e609cbf2.jpg",
  },
];

const servicesNew = [
  { id: 1, title: "Window Cleaning", img: "https://th.bing.com/th/id/OIP.LhjpNqbJ46_PYCHeBuiJuwHaE8?rs=1&pid=ImgDetMain" },
  { id: 2, title: "Window Cleaning", img: "https://th.bing.com/th/id/OIP.LhjpNqbJ46_PYCHeBuiJuwHaE8?rs=1&pid=ImgDetMain" }
];







const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showAllBestShop, setShowAllBestShop] = useState(false);
  const [showAllRecommendation, setShowAllRecommendation] = useState(false);
  // Update mobile flag on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle left navigation
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle right navigation
  const handleNext = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle click to show navigation arrows
  const handleCardContainerClick = () => {
    setShowArrows(true);
  };


  // Show only the first three cards  for shops
  const visibleShops = shops.slice(0, 3);

  return (
    <div className="   h-[100%] mt-[30px]">
     <ServiceCard/>

{/* NEW AND NOTEWORTHY CARD*/}

<div className="max-w-[1200px] mx-auto text-left w-full flex flex-col justify-center
">
      <div className="text-left px-4
">
        <h1 className="text-[1.5rem] md:text-[2.5rem] text-[#333] mb-1
">New and Noteworthy</h1>
      </div>
      

      <div className="md:flex justify-center">
      {isMobile ?  <div className="m-auto  px-9">
          <Swiper 
                  spaceBetween={16}
                  slidesPerView={1}
                  autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
                  modules={[Autoplay]}
                  className="w-full"
                >
      {servicesNew.map((service) => (
         <div className="bg-red-700 p-11">
          <SwiperSlide key={service.id}>
          < NewNoteworthy key={service.id} service={service} />
        </SwiperSlide>
         </div>
      ))}
     
    </Swiper>
        </div>:<div className="row">
      {servicesNew.map((service) => (
        < NewNoteworthy key={service.id} service={service} />
      ))}
      </div>}
      </div>
      {/**/}
    </div>

        {/*BEST SHOPS CARDS**/}


        <div className="BEST-SHOPS-CARDS-container">
      <div className="text-left flex justify-between px-4 pt-4 items-center">
        <h1 className="text-[1.5rem] md:text-[2.5rem] text-[#333]">Best Shops</h1>
        {isMobile && (
          <Link
            className="text-purple-700 hover:text-purple-900 cursor-pointer"
            onClick={() => setShowAllBestShop((prev) => !prev)}
          >
            {showAllBestShop ? "Merge" : "See all"}
          </Link>
        )}
      </div>

      {isMobile ? (
        showAllBestShop ? (
          // Show all shops in a list format when "See all" is clicked
          <div className="grid grid-cols-1 gap-4 p-4">
            {shops.map((shop) => (
              <BestShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        ) : (
          // Swiper for mobile view
          <div className="p-4">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full"
            >
              {shops.map((shop) => (
                <SwiperSlide key={shop.id}>
                  <BestShopCard key={shop.id} shop={shop} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )
      ) : (
        // Default layout for larger screens (no changes)
        <div className="shops-grid">
          {shops.map((shop) => (
            <BestShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      )}
    </div>
 {/*recommendation cards***************************************** */}
 <div className="BEST-SHOPS-CARDS-container">
      <div className="text-left flex justify-between items-center px-4">
        <h1 className="text-[1.5rem] md:text-[2.5rem] text-[#333]">Recommendation</h1>
        {isMobile && (
          <Link
            className="text-purple-700 hover:text-purple-900 cursor-pointer"
            onClick={() => setShowAllRecommendation((prev) => !prev)}
          >
            {showAllRecommendation ? "Merge" : "See all"}
          </Link>
        )}
      </div>

      {isMobile ? (
        showAllRecommendation ? (
          // Show all recommendations in a list format when "See all" is clicked
          <div className="grid grid-cols-1 gap-4 p-4">
            {RecommendationData.map((service, index) => (
              <RecommendationCard key={index} service={service} />
            ))}
          </div>
        ) : (
          // Swiper for mobile view
          <div className="p-4">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full"
            >
              {RecommendationData.map((service, index) => (
                <SwiperSlide key={service.id}>
                  <RecommendationCard key={index} service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )
      ) : (
        // Default layout for larger screens (no changes)
        <div className="shops-grid">
          {RecommendationData.map((service, index) => (
            <RecommendationCard key={index} service={service} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Services;
