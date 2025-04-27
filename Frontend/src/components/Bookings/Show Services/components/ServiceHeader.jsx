import React from "react";

const ServiceHeader = ({ title, rating, reviewsCount }) => (
  <div className="space-y-2  ">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="green"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="none"
        className="w-5 h-5"
      >
        <path d="M12 .587l3.668 7.425 8.207 1.192-5.934 5.787L19.336 24 12 20.13 4.664 24l1.395-8.009-5.934-5.787 8.207-1.192L12 .587z" />
      </svg>
      <span className="text-green-600 font-medium">{rating}</span>
      <span className="text-gray-500">({reviewsCount} reviews)</span>
    </div>
  </div>
);

export default ServiceHeader;
