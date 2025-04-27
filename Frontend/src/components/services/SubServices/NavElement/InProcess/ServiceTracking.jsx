import React from "react";
import { useState } from "react";
import Tracker from "./components/TrackingPage";
import { trackingData } from "./components/TrackingData";
import CustomButton from '../../../../Navbar/CustomButton/CustomButton';
import PrerequisitesList from '../../../../Bookings/Prerequisite/PrerequisitesList'
import { Package, ShoppingCart } from 'lucide-react';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { Link } from "react-router-dom";

const ServiceTracking = () => {
  const [activeScreen, setActiveScreen] = useState('tracker');
  return (
    <div className="mt-5">
      {/*this is sample button*/}
      <div className="flex justify-between">
      <Link to='/services/service-appointment' >Appointment</Link>
      <Link to='/services/reschedule-appointments' >Reschedule</Link>
      </div>

<div className="flex justify-center mb-0">
          <CustomButton
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
            screenName="tracker"
            label="Tracker"
            Icon={LocationSearchingIcon}
          />
          <CustomButton
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
            screenName="Prerequisites List"
            label="Prerequisites List"
            Icon={ShoppingCart}
          />
        </div>
    <div>
      
      {/* Content area with padding to keep it below the navbar */}
      <div className=" min-h-[50vh] max-h-[3000px]"> {/* Adds padding-top to content to ensure it stays below the navbar */}
        {activeScreen === 'tracker' ?<Tracker
        trackingNumber={trackingData.trackingNumber}
        serviceDetails={trackingData.serviceDetails}
        initialStatuses={trackingData.statuses}
      />  : <PrerequisitesList />}
      </div>
    </div>
    </div>
  );
};

export default ServiceTracking;
