import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/EstimationPageComponents/ServicesBooking";
import SearchForBooking from "../../components/Bookings/Search-for-Booking/Search-for-Booking";
import ScheduleServices from "../../components/Bookings/Schedule-services/Select-Date-Time/Schedule_service";
import PaymentPage from "../../components/Bookings/PaymentScreen/PaymentScreen";


import ReviewScreen from '../../components/Bookings/ReviewScreen/ReviewScreen';
import ServiceBill from '../../components/Bookings/ServiceBill/ServiceBill';
import ShowServices from '../../components/Bookings/Show Services/ShowService';

import OTPScreen from '../../components/Bookings/Otp Screen/otpScreen';


import PrerequisiteScreen from '../../components/Bookings/Prerequisite/PrerequisiteScreen';

import ConfirmBooking  from '../../components/Bookings/ConfirmBooking/ConfirmBooking';
import PaymentMode from '../../components/Bookings/PaymentScreen/PaymentMode/PaymentMode';
import "./SearchBooking.css";
import OtpPopup from '../../components/Bookings/Otp Screen/OTPpopUp/OtpPopup'

const SearchBooking = () => {
  return (
    <div className="page">
      <div className="PageContainer">
        <div className="Search-booking-navbar-content">
          {/* Navbar adjusts to container */}
          <Navbar />
        </div>
        <div className="Booking-content">
          <Routes>
            <Route index element={<SearchForBooking />} />
            <Route path="search-for-booking" element={<SearchForBooking />} />
            <Route path="schedule-services" element={<ScheduleServices />} />
            <Route path="payment-screen" element={<PaymentPage />} />
            
            <Route path="review-screen" element={<ReviewScreen/>} />
            <Route path="service-bill" element={<ServiceBill/>} />
            <Route path="show-services" element={<ShowServices/>} />
            
            <Route path="otp-screen" element={<OTPScreen/>} />
           
            
            <Route path="prerequesite-list" element={<PrerequisiteScreen/>} />
            <Route path="booking-confirmed" element={<ConfirmBooking/>} />
            <Route path="payment-mode" element={<PaymentMode/>} />
            <Route path="otp-popup" element={<OtpPopup/>} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SearchBooking;
