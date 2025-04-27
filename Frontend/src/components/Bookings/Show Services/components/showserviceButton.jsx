import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, className, onClick, to, ...props }) => {
  const navigate = useNavigate();

  // If the `to` prop is provided, it means it's a routing button
  const handleClick = () => {
    if (to) {
      navigate(to); // Navigate to the specified route
    } else {
      if (onClick) onClick(); // Execute the onClick handler if provided
    }
  };

  return (
    <button
      className={`flex-1 py-2 px-4 rounded ${className}`}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
