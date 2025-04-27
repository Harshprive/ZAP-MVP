

import React from 'react';

import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecondaryFooter = () => {
  return (
    <footer className="bg-[#EDE4FF] text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col space-y-6">
          {/* Main footer content */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-bold text-purple-700 uppercase">
       <Link to='/'> ZAP-Services</Link>
      </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-6 text-black">
              <a href="#" className="hover:text-purple-900 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-purple-900 transition-colors">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="hover:text-purple-900 transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-purple-900 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-700" />
          
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} ANI Technologies Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SecondaryFooter;

