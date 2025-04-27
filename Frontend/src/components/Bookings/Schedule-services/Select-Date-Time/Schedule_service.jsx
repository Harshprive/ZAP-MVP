import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Date from "../Select-Date-Time/Select-Date-Time/select_date";
import TimeSlot from "../Select-Date-Time/Select-Date-Time/select_time";
import ContactDeatail from "./Contact_Detail/ContactForm";
import AppointmentSummary from "../AppointmentSummary/AppointmentSummary";

const ScheduleServices = () => {
  const location = useLocation();
  const { serviceName } = location.state || {}; // Retrieve serviceName from state

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime) {
      setShowPopup(true);
      return;
    }
    alert("Service has been scheduled!");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="md:w-[60vw] flex flex-col md:flex-row justify-between gap-4 md:p-6 mt-16">
      <div className="bg-purple-100 w-full md:w-1/2 rounded-lg md:h-[86vh] shadow-md p-4">
        <Date onDateSelected={handleDateChange} />
        <TimeSlot onTimeSelected={handleTimeChange} />
      </div>

      <div className="bg-purple-100 w-full md:w-1/2 md:max-h-[86vh] p-4 rounded-lg shadow-md">
        <ContactDeatail />
        <AppointmentSummary
          serviceName={serviceName || "Service"} // Dynamic service name
          date={selectedDate ? selectedDate.toDateString() : "Not Selected"}
          time={selectedTime || "Not Selected"}
          duration="1 hour"
          onSchedule={handleSchedule}
          isDisabled={false}
        />
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg w-72">
            <p>Please select both a date and a time to schedule the service.</p>
            <button
              onClick={closePopup}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleServices;