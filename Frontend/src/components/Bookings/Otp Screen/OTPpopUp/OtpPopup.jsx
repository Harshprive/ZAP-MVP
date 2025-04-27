import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = ({ isPopupOpen, onClose }) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (otp === '123456') {
      console.log('OTP Verified:', otp);
      onClose(); // Close the OTP popup
      navigate('/celebration'); // Redirect to CelebrationCracker
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    isPopupOpen && (
      <div className="otp-popup">
        <h2>Enter OTP</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
  );
};

export default OTPVerification;
