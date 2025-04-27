
import React, { useState } from 'react';
//components 
import ProfileTab from './ProviderProfile';
import ProviderProfile from './OwnServices';
import RequestTab from './RequestTab';
import Accepted from './Accepted';
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = ['Profile', 'Request', 'Accepted'];

  const [providerProfile, setProviderProfile] = useState({
      name: "Mike's Plumbing Services",
      description: "Professional plumbing services with 15 years of experience",
      address: "123 Service Street, Plumber's Lane, NY 10001",
      email: "mike@plumbingservices.com",
      contact: "+1234567890",
      instagram: "@mikeplumbing",
      workPhotos: ["https://th.bing.com/th/id/OIP.KyWO-QWizB0N6MNgXjl92wHaEo?w=2560&h=1600&rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.KyWO-QWizB0N6MNgXjl92wHaEo?w=2560&h=1600&rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.KyWO-QWizB0N6MNgXjl92wHaEo?w=2560&h=1600&rs=1&pid=ImgDetMain"]
    });


    
  
  const getTabContent = (tab) => {
    /*return {
      title: `${tab}`,
      description: `This is the content for Page ${tab}. You can replace this with your actual content for page ${tab}.`
    };*/

    if(tab === 'Profile'){
      return(
          <ProviderProfile/>
      )
    }
    else if(tab === 'Request'){
      return(
          <RequestTab />
      )
    }
    else if(tab === 'Accepted'){
      return(
          <Accepted />
      )
    }
    
    
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 text-base font-bold transition-colors duration-200  ${
              activeTab === tab
                ? 'bg-white border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
             {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="mt-6 p-6 bg-white rounded-lg shadow-lg min-h-[300px] max-h[3000px]">



        
        {/*<div className="space-y-4">
          {/*<h2 className="text-2xl font-bold text-gray-800">
            {getTabContent(activeTab).title}
          </h2>
          
          <div className="h-1 w-20 bg-blue-500"></div>
          <p className="text-gray-600 mt-4 leading-relaxed">
            {getTabContent(activeTab).description}
          </p>*/}

          
          {/* Example Content Sections - Replace with your actual content 
          
        </div>/*/}
        {getTabContent(activeTab)}
      </div>

      {/* Navigation Footer */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setActiveTab(tabs[Math.max(tabs.indexOf(activeTab) - 1, 0)])}
          className={`px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors ${
            activeTab === tabs[0] ? 'invisible' : ''
          }`}
        >
          ← Previous Page
        </button>
        <button
          onClick={() => setActiveTab(tabs[Math.min(tabs.indexOf(activeTab) + 1, tabs.length - 1)])}
          className={`px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors ${
            activeTab === tabs[tabs.length - 1] ? 'invisible' : ''
          }`}
        >
          Next Page →
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
 
