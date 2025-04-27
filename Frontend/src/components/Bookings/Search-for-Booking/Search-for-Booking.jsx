import React, { useState } from 'react';
import EstimateForm from './EstimateForm/EstimateForm';
import ServiceMap from './ServiceMap/ServicesMap';
import ServicePopUp from '../../Bookings/ServicesPopUp';

const SearchForBooking = () => {
  const [popupOpen, setPopupOpen] = useState(true);
  const [selectedServiceLevel, setSelectedServiceLevel] = useState(null);

  const handlePopupClose = () => setPopupOpen(false);

  const handleServiceSelect = (level) => {
    console.log('Service Level Selected:', level);
    setSelectedServiceLevel(level);
  };

  return (
    <div className="p-4 md:p-10">
      <ServicePopUp
        open={popupOpen}
        onClose={handlePopupClose}
        onSelect={handleServiceSelect}
      />

      <main className="flex flex-col md:flex-row gap-4 md:gap-6 mt-16">
        <div className="bg-purple-100 w-full md:w-1/2 rounded-lg md:h-[85vh] shadow-md p-4">
          <EstimateForm />
        </div>
        <div className="w-full md:w-1/2 md:h-[85vh] h-[40vh]">
          <ServiceMap
            open={popupOpen}
            onClose={handlePopupClose}
            onSelect={handleServiceSelect}
          />
        </div>
      </main>
    </div>
  );
};

export default SearchForBooking;
