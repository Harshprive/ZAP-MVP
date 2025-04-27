import React from "react";
import Button from'./showserviceButton.jsx';

const ReviewsSection = ({ reviews }) => (
  <div className="space-y-4">
    <h3 className="font-semibold">All Reviews</h3>
    <div className="w-full flex justify-around gap-6 ">
    <Button
      text="Most Detailed"
      className="border-2 hover:bg-purple-600 hover:text-white  rounded text-black border-purple-700 h-10 "
      onClick={() => alert("Book Now clicked")}
    />
    <Button
      text="Frequent User"
      className="border-2 hover:bg-purple-600 hover:text-white rounded text-black border-grey-700 h-10"
      onClick={() => alert("Book Now clicked")}
    />
    </div>
    {reviews.map((review, index) => (
      <div key={index} className="border-t pt-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">{review.author}</h4>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="none"
              className="w-4 h-4"
            >
              <path d="M12 .587l3.668 7.425 8.207 1.192-5.934 5.787L19.336 24 12 20.13 4.664 24l1.395-8.009-5.934-5.787 8.207-1.192L12 .587z" />
            </svg>
            <span>{review.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">{review.content}</p>
      </div>
    ))}
  </div>
);

export default ReviewsSection;
