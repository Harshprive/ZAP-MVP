import React from 'react';
import Header from './components/CreateService3_components/Header';
import About from './components/CreateService3_components/About';
import ServiceImages from './components/CreateService3_components/ServiceImages';
import LocationContact from './components/CreateService3_components/LocationContact';
import CurrentPlan from './components/CreateService3_components/CurrentPlan';
import LegalDocuments from './components/CreateService3_components/LegalDocuments';
import CreateServiceButton from './components/CreateService3_components/CreateServiceButton';

const ServiceProfile = () => {
  const documents = [
    { name: 'Business License', id: 1 },
    { name: 'Tax Certification', id: 2 },
    { name: 'Insurance Policy', id: 3 },
  ];

  const planFeatures = [
    'Basic Service listing',
    'Email Support',
    'Featured Listing',
    'Standard Visibility',
  ];

  const images = [
    {
      url: 'https://chillsairconditioning.com/wp-content/uploads/2021/05/The-Demand-for-AC-Repair-in-Miami-FL-Is-Huge.jpg',
      alt: 'Service professional meeting client',
    },
    {
      url: 'https://chillsairconditioning.com/wp-content/uploads/2021/05/The-Demand-for-AC-Repair-in-Miami-FL-Is-Huge.jpg',
      alt: 'Service professional working',
    },
  ];

  return (
    <div className=" pb-10  space-y-6 w-[90%] m-[4%] shadow-xl border rounded-lg ">
     <div className="w-100% ">
     <h1 className="text-[30px] font-semibold text-purple-600 flex justify-center p-0 mt-6 ">Service Profile</h1>
      <div className="md:px-[120px] px-4">
      <Header title="Professional Cleaning Services" rating="4.8" reviews="127" status="Active" />
      <div className="bg-gray-700 h-[2px] mt-2 mb-8 "></div>
      <About description="A professional service tailored to everyday needs" />
      <ServiceImages images={images} />
      <LocationContact
        address="Professional visit location"
        phone="+91-1234567890"
        email="Contact@gmail.com"
        hours="Mon-Sat 9:00 AM - 6:00 PM"
      />
      <CurrentPlan planName="Semi-Annual Plan" price="60" features={planFeatures} />
      <LegalDocuments documents={documents} />
      <CreateServiceButton onClick={() => console.log('Create service clicked')} />
      </div>
     </div>
    </div>
  );
};

export default ServiceProfile;
