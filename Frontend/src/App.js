import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SearchBooking from './Pages/SearchBooking/SearchBooking';
import Home from './Pages/Main/Home/HomePage';
import ServicesPage from './Pages/Main/ServicesPage/Services';
import CreateServicePage from '../src/Pages/ServiceFormPage/ServiceForm';
import AddService from './Pages/AddServices/AddServices'


import { CityProvider } from "./context/cityContext";

function App() {
  return (
    


    <Routes>
      <Route path="/" element={<><Home /></>} />
      <Route path="/services/*" element={<ServicesPage />} />
      <Route path="/search-booking/*" element={<SearchBooking />} />
      <Route path="/create-service/*" element={<CreateServicePage />} />
      <Route path="/add-service" element={<AddService />} />
      
    </Routes>
  
    

    
    
  );
}

export default App;
