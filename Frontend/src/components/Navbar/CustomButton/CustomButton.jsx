// CustomButton.jsx
import React from 'react';

const CustomButton = ({ activeScreen, setActiveScreen, screenName, label, Icon }) => {
  const isActive = activeScreen === screenName;

  // Set default button colors
  const buttonClass = isActive
    ? 'bg-blue-500 text-white'
    : screenName === 'materials || tracker' // Apply green background for "Self Buy" by default
    ? ' text-black' // Apply black
    : 'bg-white text-gray-700 hover:bg-gray-100';

  return (
    <button
      onClick={() => setActiveScreen(screenName)}
      className={`  flex-1 p-4 flex items-center  mt-1 justify-center ${buttonClass}`}
    >
      <Icon className="mr-2" />
      {label}
    </button>
  );
};

export default CustomButton;
