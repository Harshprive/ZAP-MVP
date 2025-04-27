import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
/***********components ************************/
import NavbarLogin from '../../../components/Navbar/ServicesNavbars/NavbarLogin/LoginNavbar';
import Footer from '../../../components/Footer/foot';
import ServiceNavbar from '../../../components/Navbar/ServicesNavbars/ServiceNavbar';
import SubServices from '../../../components/services/SubServices/SubServices';
import WorkGallary from '../../../components/WorkGallary/WorkGallary';
import ServicesOrders from '../../../components/services/SubServices/NavElement/Orders/orders';
import TakewayTabNavigation from '../../../components/services/SubServices/NavElement/Message/TakewayMessageNavigation';
import ServiceTracker from '../../../components/services/SubServices/NavElement/InProcess/ServiceTracking';
import RentViewService from '../../../components/Bookings/RentViewService';
import ServicePOPUP from '../../../components/Bookings/ServicesPopUp';
import OwnServices from '../../../components/services/SubServices/NavElement/OwnServices/OwnServicePage';
import RentRoomServices from '../../../components/Bookings/RentViewService';
import ViewOrderDetails from '../../../components/services/SubServices/NavElement/Orders/ViewOrderDetail/ViewOrderDetail';
import ServiceAppointment from '../../../components/services/SubServices/NavElement/InProcess/ServiceAppointment/ServiceAppointment';
import RescheduledAppointments from '../../../components/services/SubServices/NavElement/InProcess/Rechedule Service/RescheduleService';
import SecondaryFooter from '../../../components/Navbar/Footer/SecondaryFooter';

import Scanner from '../../../addserviceQR/AddServiceQr';
import OwnService2 from '../../../components/services/SubServices/NavElement/OwnServices/Components/OwnService2';
import NearYouPage from '../../../components/servicesPage/servicesComponents/NearYou/NearYouPage/NearYouPage';

/**********************************************/
import './Services.css';

const Services = () => {
  const [userLogin, setUserLogin] = useState(true);
  const location = useLocation();
  const { serviceName } = location.state || {};

  // Routes that should show SecondaryFooter
  const showSecondaryFooterRoutes = [
    "/tracker",
    "/Message-and-takeway",
    "/Orders",
    "/own-services",
    "/view-order-details",
    "/service-appointment",
    "/reschedule-appointments"
  ];

  // Check if current route matches any in showSecondaryFooterRoutes
  const showSecondaryFooter = showSecondaryFooterRoutes.some((route) => location.pathname.endsWith(route));

  // Check if the current route matches any in hideFooterRoutes
  //const hideFooterRoutes = ["Message-and-takeway"];
  //const hideFooter = hideFooterRoutes.some((route) => location.pathname.endsWith(route));

  return (
    <div className="service-main-page">
      {userLogin ? <ServiceNavbar /> : <NavbarLogin />}
      {serviceName && <h1>{serviceName}</h1>}
      <div className="">
        <Routes>
          <Route path="/" element={<SubServices />} />
          <Route path="/work-gallery" element={<WorkGallary />} />
          <Route path="/orders" element={<ServicesOrders />} />
          <Route path="/rent-view-service" element={<RentViewService />} />
          <Route path="/message-and-takeway" element={<TakewayTabNavigation />} />
          <Route path="/tracker" element={<ServiceTracker />} />
          <Route path="/service-popup" element={<ServicePOPUP />} />
          <Route path="/own-services" element={<OwnServices />} />
          <Route path="/rent-service-room" element={<RentRoomServices />} />
          <Route path="/view-order-details" element={<ViewOrderDetails />} /> {/* add route for view order details */}
          <Route path="/service-appointment" element={<ServiceAppointment />} />
          <Route path="/reschedule-appointments" element={<RescheduledAppointments />} /> {/* add route for reschedule appointments */}
          <Route path="/scanner" element={<Scanner />} /> {/* add route for add service qr */}
          <Route path="/own-service-2" element={<OwnService2 />} />  {/* add route for own service 2 */}
          <Route path="/near-you-page" element={<NearYouPage />} /> {/* add route for near you page */}
          
        </Routes>
      </div>
      {showSecondaryFooter ? <SecondaryFooter /> : <Footer />}
    </div>
  );
};

export default Services;
