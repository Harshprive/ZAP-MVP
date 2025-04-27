import React, { useRef } from 'react';

const VerificationCode = ({ code, handleCodeChange, formatTime, resendCode }) => {
  // Create refs for each input field
  const inputRefs = useRef([]);

  // Set the ref for each input dynamically
  const handleFocusChange = (index, event) => {
    if (event.target.value.length === 1) {
      // Move to next input if a digit is entered
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (event.target.value.length === 0) {
      // Move to previous input if a digit is deleted
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-4">Verify Your Booking</h3>
      <p className="text-gray-600 mb-4">Please enter the 4-digit code sent to your phone</p>

      {/* Code Input */}
      <div className="flex justify-center gap-4 mb-4">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => {
              handleCodeChange(index, e.target.value);
              handleFocusChange(index, e);
            }}
            ref={(el) => (inputRefs.current[index] = el)} // Assign ref to each input
            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md"
          />
        ))}
      </div>

      {/* Timer */}
      <p className="text-sm text-gray-500">
        Code expires in <span id="timer">{formatTime()}</span>
      </p>

      {/* Resend Code */}
      <p className="text-sm text-blue-500 mt-2">
        Didn't receive the code?{' '}
        <a href="#" onClick={resendCode} id="resend-code" className="underline">
          Resend Code
        </a>
      </p>
    </div>
  );
};

export default VerificationCode;
