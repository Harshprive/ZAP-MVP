import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentSummary = ({ serviceName, date, time, duration, onSchedule, isDisabled }) => {

  const navigate = useNavigate();

  const handleSchedule = () => {
    if (onSchedule) {
      onSchedule(); // Call the existing function
    }
    navigate('/services/reschedule-appointments'); // Redirect to the new page
  };
  return (
    <div className="bg-gray-200 p-5 rounded-lg max-w-sm bg-transparent">
      <h2 className="text-xl font-semibold">Appointment Summary</h2>
      <div className="mt-3 space-y-2">
        <p className="flex justify-between"><strong>Service Name:</strong> <span className="text-right">{serviceName}</span></p>
        <p className="flex justify-between"><strong>Date:</strong> <span className="text-right">{date}</span></p>
        <p className="flex justify-between"><strong>Time:</strong> <span className="text-right">{time}</span></p>
        <p className="flex justify-between"><strong>Duration:</strong> <span className="text-right">{duration}</span></p>
      </div>
      <button 
        className={`w-full mt-3 py-1  rounded-md text-white text-lg transition ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-700'}`} 
        onClick={handleSchedule} 
        disabled={isDisabled}
      >
        Schedule Service
      </button>
    </div>
  );
};

export default AppointmentSummary;