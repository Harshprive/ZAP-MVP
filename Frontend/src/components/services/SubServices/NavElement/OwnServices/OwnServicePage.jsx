import React, { useState } from 'react';
import { Package, ShoppingCart } from 'lucide-react';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

import CustomButton from '../../../../Navbar/CustomButton/CustomButton'; // Import CustomButton
import OwnService from './Components/OwnService2';
import RequestPage from './Components/RequestPage';

const OwnServicePage = () => {
  const [activeScreen, setActiveScreen] = useState('yourservice');

  return (
    <div className=' mt-7'>
      <OwnService/>
    </div>
  );
};

export default OwnServicePage;
