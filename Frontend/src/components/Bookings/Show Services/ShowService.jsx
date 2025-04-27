import React from "react";
import ServiceImage from "./components/ServiceImage";
import ServiceHeader from "./components/ServiceHeader";
import NotesSection from "./components/NotesSection";
import ReviewsSection from "./components/ReviewsSection";
import CardFooterButtons from "./components/CardFooterButtons";

const ServiceReviewCard = () => {
  const serviceData = {
    image: "https://th.bing.com/th/id/OIP.gImAfTvj9-gUHCTQMo6_vQHaE8?rs=1&pid=ImgDetMain",
    title: "Fully automatic washing machine check-up (top load)",
    rating: 4.86,
    reviewsCount: "14M",
    notes: [
      "Repair costs will be provided after the diagnosis",
      "The visitation charge will be adjusted in the repair cost",
      "We do not replace or install water taps",
      "We do not repair commercial appliances",
    ],
    reviews: [
      {
        author: "Asmita Jaronde",
        date: "Aug 15, 2024",
        rating: 5,
        content:
          "I had the heater washing machine sensor and wiring error. Sheikh explained everything well, what is the problem, and what solution is required and what not is required. He did his work well.",
      },
    ],
  };

  return (
    <div className="md:p-11 p-4 md:pt-36 pt-20  w-[100vw] md:w-[100%]">
      <ServiceImage src={serviceData.image} alt="Technician checking washing machine" />
      <div className="p-4 space-y-6 ">
       <div className="md:w-80 w-100">
       <ServiceHeader
          title={serviceData.title}
          rating={serviceData.rating}
          reviewsCount={serviceData.reviewsCount}
        />
       </div>
        <NotesSection notes={serviceData.notes}  />
        
        <ReviewsSection reviews={serviceData.reviews} />
        
      </div>
      <CardFooterButtons />
    </div>
  );
};

export default ServiceReviewCard;
