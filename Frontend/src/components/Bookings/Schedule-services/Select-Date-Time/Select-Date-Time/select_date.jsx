import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles
import './select_date.css'; // Custom styles

const CalendarComponent = ({ onDateSelected }) => {
  const [date, setDate] = useState(null);

  const handleChange = (newDate) => {
    setDate(newDate);
    onDateSelected(newDate); // Notify the parent component
  };

  return (
    <div className="calendar-container">
      <h2>Select Date & Time</h2>
      <div className="calendar-wrapper">
        <Calendar
          onChange={handleChange}
          value={date}
          minDate={new Date()}
          tileDisabled={({ date }) => date < new Date()}
          showNeighboringMonth={false}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
