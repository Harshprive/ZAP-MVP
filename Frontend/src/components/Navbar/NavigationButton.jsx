import React from 'react';
import PropTypes from 'prop-types';

const NavigationButton = ({ isActive, onClick, icon: Icon, label, customStyles }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 p-4 flex items-center justify-center ${
        isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
      } ${customStyles}`}
    >
      {Icon && <Icon className="mr-2" />} {label}
    </button>
  );
};

NavigationButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
};

NavigationButton.defaultProps = {
  icon: null,
  customStyles: '',
};

export default NavigationButton;
