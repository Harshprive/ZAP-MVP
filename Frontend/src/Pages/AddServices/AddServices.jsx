



import React from 'react';
import Navbar from '../../components/Navbar/ServicesNavbars/NavbarLogin/LoginNavbar';
import Footer from '../../components/Footer/foot';
import AddServiceScanner from '../../addserviceQR/AddServiceQr'
const ZapSignupPage = () => {
  return (

    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat ">
        <Navbar />
      
      
      <div className="  flex h-full bg-[url('https://static.vecteezy.com/system/resources/previews/038/817/733/non_2x/ai-generated-engaging-background-with-a-friendly-taxi-driver-drawing-viewers-into-the-scene-free-photo.jpeg')] bg-no-repeat bg-cover ">
        {/* Form Section */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
            <h1 className="text-4xl font-bold mb-2">Welcome to Zap!</h1>
            <h2 className="text-2xl mb-8">Start driving today.</h2>
            
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors"
              >
                Sign up now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
          
          
        </div>
        
        {/* Image Section */}
       {/* <div className="w-1/2 relative overflow-hidden">
          <img
            src="/api/placeholder/800/600"
            alt="Smiling Zap driver in car"
            className="w-full h-full object-cover"
          />
        </div>*/}
      </div>
      <Footer />
    </div>
  );
};

export default ZapSignupPage;

