import React, { useState } from "react";

const TimeSlot = ({ onTimeSelected }) => {
  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  ];

  const [selectedTime, setSelectedTime] = useState("");

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    onTimeSelected(time);
  };

  return (
    <div className="mt-5 text-left p-3 shadow-lg rounded-lg">
      <h3 className="text-lg font-semibold">Available Time Slots</h3>
      <div className="flex flex-wrap justify-center gap-2 mt-3 ">
        {availableTimes.map((time, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md transition-colors duration-300 focus:outline-none ${
    selectedTime === time
      ? "bg-purple-600 text-white"
      : "bg-gray-200 border-gray-300 hover:bg-gray-300"
  }`}
            onClick={() => handleSelectTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;