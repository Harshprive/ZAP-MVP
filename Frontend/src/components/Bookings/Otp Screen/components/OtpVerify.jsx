import React from 'react';

const VerifyBooking = () => {
  return (
    <div className="verify-booking">
      <h3>Verify Your Booking</h3>
      <p>Please enter the 4-digit code sent to your phone</p>
      <div className="code-input">
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
      </div>
      <p className="code-expire">
        Code expires in <span>01:59</span>
      </p>
      <p>
        Didn't receive the code?{' '}
        <a href="#" className="color">
          Resend Code
        </a>
      </p>
      <button className="confirm-btn">Confirm Booking</button>
    </div>
  );
};

export default VerifyBooking;
