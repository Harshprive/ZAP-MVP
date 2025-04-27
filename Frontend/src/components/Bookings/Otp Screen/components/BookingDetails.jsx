// BookingDetails.js
import React from 'react';

const BookingDetails = ({ service, date, duration }) => {
  return (
    <div className="mb-6 bg-[#EDE4FF] p-6 rounded-lg">
      <h2 className="text-2xl text-left font-bold text-black">Booking Details</h2>

      <div className="flex justify-between py-2 border-b">
        <span className="text-lg">Service</span>
        <span className="text-lg text-gray-700">{service}</span>
      </div>
      <div className="flex justify-between py-2 border-b">
        <span className="text-lg">Date</span>
        <span className="text-sm text-gray-700">{date}</span>
      </div>
      <div className="flex justify-between py-2 border-b">
        <span className="text-lg">Duration</span>
        <span className="text-lg text-gray-700">{duration}</span>
      </div>
    </div>
  );
};

export default BookingDetails;
