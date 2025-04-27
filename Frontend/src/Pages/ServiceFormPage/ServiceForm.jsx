import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateServiceForm from '../../components/Bookings/CreateService/CreateServiceForm';
import Navbar from '../../components/Navbar/ServicesNavbars/ServiceNavbar';
import ServicePlan from '../../components/Bookings/CreateService/ServicePlan';
import CustomServiceProfile from '../../components/Bookings/CreateService/CreateService3';
import SecondaryFooter from '../../components/Navbar/Footer/SecondaryFooter';

const ServiceForm = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateServiceForm />} />
        <Route path="/Pricing-plan" element={<ServicePlan />} />
        <Route path="/service-profile" element={<CustomServiceProfile/>} />
        
      </Routes>
      <SecondaryFooter/>
    </div>
  );
};

export default ServiceForm;
