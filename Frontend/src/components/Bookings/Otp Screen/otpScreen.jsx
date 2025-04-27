import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingDetails from './components/BookingDetails';
import VerificationCode from './components/VerificationCode';
import Timer from './components/Timer';

const BookingConfirmation = () => {
  const [timer, setTimer] = useState(119); // Time in seconds
  const [code, setCode] = useState(['', '', '', '']);
  const [isValid, setIsValid] = useState(false); // State to check OTP validity
  const navigate = useNavigate(); // Hook for navigation

  // Handle input change for the code
  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); // Only allow 1 character per input
    setCode(newCode);
  };

  // Handle resend code
  const resendCode = () => {
    alert('Resending the code...');
    // Logic to resend code
    setTimer(119); // Reset timer if you want to start over
  };

  // Verify OTP logic
  const verifyOTP = () => {
    const enteredCode = code.join(''); // Combine the code array into a string
    if (enteredCode === '1234') {
      // Replace '1234' with your actual OTP validation logic
      setIsValid(true);
      alert('OTP Verified Successfully!');
      navigate('/search-booking/prerequesite-list'); // Navigate to another page
    } else {
      setIsValid(false);
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen mt-10 md:mt-2 bg-[#EDE4FF] pt-11 flex flex-col justify-center">
      {/* Breadcrumb Section */}
      <div className=" pl-5">
        <h4 className="text-[14px] md:text-[16px]">
          Home / India / City / Service /<span className="text-red-600">Confirmation</span>
        </h4>
      </div>

      <div className="h-[100%]">
        {/* Main Container */}
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
          {/* Booking Details Section */}
          <BookingDetails
            service="Washing Machine Rep"
            date="October 30, 2024"
            duration="30 min"
          />

          {/* Verification Section */}
          <VerificationCode
            code={code}
            handleCodeChange={handleCodeChange}
            formatTime={() => <Timer initialTime={timer} />}
            resendCode={resendCode}
            verifyOTP={verifyOTP}
          />

          {/* Confirm Button */}
          <button
            className="w-full mt-4 py-3 bg-purple-700 text-white text-lg rounded-md"
            onClick={verifyOTP}
          >
            Confirm Booking
          </button>

          {/* Display Success or Failure */}
          {isValid && <p className="text-green-600 text-center mt-4">OTP Verified Successfully!</p>}
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
