import React, { useState } from "react";

const ServiceTracking = ({ trackingNumber, serviceDetails, initialStatuses }) => {
  // State to manage dynamic statuses
  const [statuses, setStatuses] = useState(initialStatuses);

  // Function to update the current status dynamically
  const updateStatus = (index) => {
    setStatuses((prevStatuses) =>
      prevStatuses.map((status, i) => ({
        ...status,
        active: i <= index, // Mark all previous and current statuses as active
      }))
    );
  };

  return (
    <div className=" bg-[rgb(246,242,255)] min-h-[100vh] max-h-[3000px]">

      <div className="">
       {/* <h3 className="text-purple-700">India/City/Service/Confirmation/<span className="text-red-600">Tracker</span></h3>*/}
      </div>
      <div className="  pt-8 pb-8">

        <div className="font-sans p-12 max-w-[500px] mx-auto bg-white rounded-2xl shadow-lg ">
          <h2 className="text-center font-bold text-2xl text-gray-900">Track Your Service</h2>
      <p className="text-center text-sm text-gray-500">Real-Time update on your service status</p>

      {/* Tracking Number */}
      <div className="mt-6 flex justify-start gap-6 items-center bg-[#F6F2FF] shadow-md p-4 rounded-md">
        <span className="text-sm text-gray-500">Tracking Number</span>
        <span className="text-sm text-gray-800">{trackingNumber}</span>
      </div>

      {/* Dynamic Progress Tracker */}
      <div className="relative mt-10">
        <div className=" ml-8 absolute w-[85%] top-[12px] h-[3px] bg-[#F6F2FF] z-0"></div>
        <div
          className={`absolute top-[12px] w-[70%] pl-11 h-[3px] z-10 bg-purple-400 ml-8 transition-all duration-300 `}
          style={{
            width: `${(statuses.filter((status) => status.active).length - 0.6) /
              (statuses.length - 1) *
              82}%`,
          }}
        ></div>

        <div className="flex justify-between items-center relative z-20">
          {statuses.map((status, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-6 h-6 rounded-full mx-auto flex items-center justify-center ${
                  status.active ? "bg-purple-500 text-white" : "bg-gray-300 text-gray-500"
                } transition-all duration-300`}
              >
                
              </div>
              <span
                className={`block mt-2 text-sm ${
                  status.active ? "text-purple-600 font-semibold" : "text-gray-500"
                }`}
              >
                {status.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details */}
      <div className="mt-12 bg-purple-50 p-4 rounded-md shadow-md">
        <h3 className="mb-4 text-base font-bold text-black">Service Details</h3>
        <div className="flex justify-between">
          <div className="text-left">
            <span className="block text-sm text-gray-500 mb-1">Name</span>
            <span className="block text-sm text-black">{serviceDetails.name}</span>
          </div>
          <div className="text-left">
            <span className="block text-sm text-gray-500 mb-1">Date</span>
            <span className="block text-sm text-black">{serviceDetails.date}</span>
          </div>
          <div className="text-left">
            <span className="block text-sm text-gray-500 mb-1">Time</span>
            <span className="block text-sm text-black">{serviceDetails.time}</span>
          </div>
        </div>
      </div>

      {/* Status Update Controls */}
      <div className="mt-10 flex flex-col bg-purple-50 gap-4 p-4 shadow-md rounded-md">
  {statuses.map((status, index) => (
    <label
      key={index}
      className="flex items-center gap-3 text-sm cursor-pointer"
    >
      {/* Custom button with dynamic color */}
      <div
        className={`w-6 h-6 rounded-full transition-all duration-300 ${
          status.active ? "bg-purple-600" : "bg-gray-300"
        }`}
      ></div>
      <span
        className={`transition-all duration-300 ${
          status.active ? "text-purple-600 font-bold" : "text-gray-500"
        }`}
      >
        {status.label}
      </span>
      <input
        type="radio"
        checked={status.active}
        onChange={() => updateStatus(index)}
        className="hidden"
      />
    </label>
  ))}
</div>

    </div>
      </div>

    </div>
  );
};

export default ServiceTracking;
