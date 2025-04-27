import React from 'react';
import  './footer.css';

import { Twitter } from '../../assets/footer/twitter-logo.svg';
import { Instagram } from '../../assets/footer/instagram-logo.svg';
import { YouTube } from '../../assets/footer/youtube-logo.svg';

const Footer = () => {
  return (
      <div className="w-[100vw] py-10 bg-purple-100 font-sans bg-green-500">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6 px-6 ">
              {/* Left Column */}
              <div className="flex flex-col items-start">
                  <h3 className="text-4xl font-bold text-purple-700">ZAP</h3>
                  <div className="flex space-x-4 mt-3">
                      <a href="Insta"><img src='https://www.svgrepo.com/show/521711/instagram.svg' alt="Instagram" className="w-7 h-7" /></a>
                      <a href="YouTube"><img src='https://www.svgrepo.com/show/513089/youtube-168.svg' alt="YouTube" className="w-7 h-7" /></a>
                      <a href="Twitter"><img src='https://www.svgrepo.com/show/513008/twitter-154.svg' alt="Twitter" className="w-7 h-7" /></a>
                  </div>
              </div>
              <div className="w-[500px] flex items-center justify-evenly">
                 {/* Center Column */}
              <div className="flex flex-col text-lg text-gray-800 space-y-2 relative pr-5">
                  <h4 className="text-2xl font-semibold">Quick Links</h4>
                  <a href="/Book a Service">Book a Service</a>
                  <a href="/Provider with us">Provider with us</a>
                  <a href="/Outstation">Outstation</a>
                  <a href="/Rental">Rental</a>
                  <a href="/Zap Money">Zap Money</a>
                  <a href="/Corporate">Corporate</a>
                  {/* Divider for larger screens */}
                  
              </div>
              {/* Divider for larger screens */}
              <div className=" absolute  w-[2px] h-[160px] bg-gray-800 "></div>
              
              {/* Right Column */}
              <div className="flex flex-col text-lg text-gray-800 space-y-2">
                  <a href="/About Us">About Us</a>
                  <a href="/Contact Us">Contact Us</a>
                  <a href="/Support">Support</a>
                  <a href="/Careers">Careers</a>
                  <a href="/Media Centre">Media Centre</a>
              </div>
              </div>
              
             
          </div>
      </div>
  );
};

  
  export default Footer;
