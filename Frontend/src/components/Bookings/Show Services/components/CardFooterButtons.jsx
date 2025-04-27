import React from "react";
import Button from "./showserviceButton"; // Import the reusable Button component

const CardFooterButtons = () => (
  <div className="p-4 flex gap-2 border-t border-gray-300">
    {/* Back Button - Navigate to the previous page */}
    <Button
      text="Back"
      className="border border-gray-300 text-black 
      hover:bg-purple-700
      hover:text-white hover:bg-gray-100 h-14 text-[14px]"
      to="/previous-page" // Example route
    />

    {/* Book Now Button - Handle some custom action */}
    <Button
      text="Book Now"
      className="border-2 hover:bg-purple-700
      hover:text-white rounded text-black border-purple-700 h-14 text-[14px] "
      /*onClick={() => alert("Book Now clicked")}*/
      to="/search-booking/payment-mode"
    />

    {/* New Service Button - Navigate to a new service page */}
    <Button
      text="New Service"
      className="border border-gray-300 text-black 
      hover:bg-purple-700
      hover:text-white hover:bg-gray-100 h-14 text-[14px] "
      to="/new-service" // Example route
    />
  </div>
);

export default CardFooterButtons;
