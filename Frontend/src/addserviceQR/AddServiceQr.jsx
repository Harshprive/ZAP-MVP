 
import React from 'react';

const DriverAppDownload = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section - Download Info */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Download Driver App
          </h1>
          
          <p className="text-xl text-gray-600">
            Take rides, track your earnings, get regular updates and more.
          </p>
          
          <div className="space-y-4">
            <p className="text-gray-600">Scan QR code to download</p>
            
            {/* QR Code Container */}
            <div className="bg-white p-4 rounded-lg shadow-sm inline-block">
              <div className="w-48 h-48 bg-gray-900" />
            </div>
          </div>
        </div>

        {/* Right Section - Phone Preview Container */}
       {/* <div className="lg:w-1/2">
          <div className="bg-green-100 rounded-3xl p-8 relative h-[600px]">
            {/* Diagonal Lines Background */}
            {/*<div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full w-full origin-bottom-right transform rotate-45 translate-y-1/2"
                  style={{
                    left: `${i * 10}%`,
                    background: 'linear-gradient(to right, transparent, rgba(0,255,0,0.1))',
                    height: '1px'
                  }}
                />
              ))}
            </div>
            
            {/* Phone Frame */}
            {/*<div className="relative bg-white rounded-3xl shadow-xl p-4 mx-auto max-w-sm h-full">
              {/* Location Info */}
              {/*<div className="p-4">
                <div className="text-gray-700 text-sm">HSR Layout</div>
                <div className="text-gray-500 text-xs">
                  465, 17th A Main Rd, Sector 3, HSR Layout, Bengaluru
                </div>
              </div>
              
              {/* Price Display */}
              {/*<div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-xl shadow-lg">
                <div className="space-y-2">
                  <div className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">
                    CASH PAYMENT
                  </div>
                  <div className="text-2xl font-bold">₹130</div>
                  <div className="text-gray-500 text-sm">Inclusive of all tax</div>
                  <div className="text-sm">Mini • 1.7 km</div>
                  <div className="text-green-600">1.2x</div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default DriverAppDownload;

