import React, { useEffect, useRef } from "react";
import roomdata from "./Roomdata";
import RoomCard from "./NearYou";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const NearYouCardContainer = () => {
  const carouselRef = useRef();

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(0); // Restart autoplay
    }
  }, []);

  return (
    <div className="relative w-full">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        className="flex justify-between m-[1px]"
      >
        {roomdata.map((room) => (
          <RoomCard key={room.id} title={room.title} type={room.type} address={room.address} imageUrl={room.imageUrl} />
        ))}
      </Carousel>
    </div>
  );
};

export default NearYouCardContainer;
