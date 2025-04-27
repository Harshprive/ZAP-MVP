import React, { useState, Suspense } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DescriptionIcon from '@mui/icons-material/Description';
/*import NavigationButton from './NavigationButton';*/
import CustomButton from '../../../../Navbar/CustomButton/CustomButton';

// Lazy loading components
const MessageScreen = React.lazy(() => import('./MessageScreen'));
const RepairTakeAwayScreen = React.lazy(() => import('./TakeWay'));

const MainNavigationScreen = () => {
  const [activeScreen, setActiveScreen] = useState('message');

  return (
    <div className="flex flex-col mt-5">
      <div className="flex justify-center border-b">
        {/*<NavigationButton
          isActive={activeScreen === 'message'}
          onClick={() => setActiveScreen('message')}
          icon={SendIcon}
          label="Messages"
        />
        <NavigationButton
          isActive={activeScreen === 'takeaway'}
          onClick={() => setActiveScreen('takeaway')}
          icon={DescriptionIcon}
          label="Take Away"
        />*/}
        <CustomButton
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          screenName="message"
          label="Messages"
          Icon={SendIcon}
        />
        <CustomButton
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          screenName="takeaway"
          label="Take Away"
          Icon={DescriptionIcon}
        />
      </div>
      <div className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          {activeScreen === 'message' ? <MessageScreen /> : <RepairTakeAwayScreen />}
        </Suspense>
      </div>
    </div>
  );
};

export default MainNavigationScreen;
