import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingCart } from 'lucide-react';
import PrerequisitesList from './PrerequisitesList';
import MaterialsList from './MaterialsList';
import CustomButton from '../../Navbar/CustomButton/CustomButton'; // Import CustomButton

const MainNavigationScreen = () => {
  const [activeScreen, setActiveScreen] = useState('prerequisites');

  return (
    <div className=" bg-green-200 w-full  mt-16">
      {/* Content area with padding to keep it below the navbar */}
      <div className=" h-[84vh]"> {/* Adds padding-top to content to ensure it stays below the navbar */}
        {activeScreen === 'prerequisites' ?<MaterialsList />  : <PrerequisitesList />}
      </div>

      {/* Sticky navbar */}
      <div className="sticky top-0 bg-white z-10 border-b "> 
        <div className="flex justify-center">
          <CustomButton
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
            screenName="prerequisites"
            label="Pre Order"
            Icon={Package}
          />
          <CustomButton
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
            screenName="materials"
            label="Self Buy"
            Icon={ShoppingCart}
          />
        </div>
      </div>
      {/* Confirm Button */}
      
      <Link to='/search-booking/booking-confirmed'>
          <button
            className="w-full mt-4 py-3 bg-purple-700 text-white text-lg rounded-md"
            
          >
            Confirm Order
          </button>

      </Link>
      
    </div>
  );
};

export default MainNavigationScreen;
