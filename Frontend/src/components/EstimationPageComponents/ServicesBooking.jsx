import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import { AppBar, Toolbar } from '@mui/material';

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppBar sx={{ backgroundColor: 'transparent',display:'flex', boxShadow:'none',alignItems:{md:'center'}}} position="fixed">
      <Toolbar className="flex md:justify-between justify-evenly items-center px-4 py-2 md:w-[60vw] shadow-xl md:bg-white bg-white mb-0 text[#6b21a8] w-[100vw]">
        {/* Sidebar Button */}
        <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-md hover:bg-purple-50 ">
          <MenuIcon className="text-[#6b21a8]" />
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to="/search-booking/schedule-services" className="text-[#6b21a8] hover:text-gray-300">Schedule</Link>
          <div className="text-[#6b21a8] font-bold text-lg">ZAP</div>
          <Link to="/search-booking/show-services" className="text-[#6b21a8] hover:text-gray-300">ShowService</Link>
        </div>

        {/* Login Button */}
        <button className="md:px-4 px-1 py-1.5 border-[2px] text-md border border-[#6b21a8] text-[#6b21a8] rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-purple-900 ">
          Log in
        </button>
      </Toolbar>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
    </AppBar>
  );
}
