import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const HomeNavbar = () => {
  const [NavMenuIcon, setNavMenuIcon] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuIcon(!NavMenuIcon);
  };

  return (
    <nav className="w-[100%] flex justify-between items-center h-16 px-5 bg-white shadow-md rounded-b-xl">
      <div className="flex items-center space-x-4">
        <AccountCircle className="text-black" />
        <div className="flex items-center space-x-2">
          <LanguageIcon className="text-black" />
          <select className="text-black bg-transparent text-sm rounded-md focus:outline-none">
            <option value="en">ENG</option>
            <option value="es">HI</option>
            <option value="fr">TA</option>
            <option value="fr">MR</option>
            <option value="fr">BN</option>
            <option value="fr">ML</option>
            <option value="fr">KN</option>
            <option value="fr">TE</option>
          </select>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center md:space-x-1">
        <button className="px-3 py-2 text-black rounded-md hover:border-[#4F23B8] hover:border-[2px]">
          Add Shop
        </button>
        <Link to="/add-service" className="text-black no-underline">
          <button className="px-3 py-2 text-black rounded-md hover:border hover:border-[#4F23B8] hover:border-[2px]">
            Add Service
          </button>
        </Link>
        <Link to="/create-service">
          <button className="px-3 py-2 text-black border border-[#4F23B8] rounded-md border-[2px]">
            Launch Service
          </button>
        </Link>
      </div>

      {/* Menu icon for mobile */}
      <button className="md:hidden" onClick={toggleNavMenu}>
        <MenuIcon className="text-black cursor-pointer" />
      </button>

      {/* Mobile menu */}
      {NavMenuIcon && (
        <div className="absolute top-0 right-0 w-full h-[180px] bg-white z-10 flex flex-col items-center pt-1 space-y-4  rounded-b-2xl transition-all transform ease-in-out duration-10  ">
          <button className="px-1 py-1 text-black rounded-md hover:border-[#4F23B8] hover:border-[2px]">
            Add Shop
          </button>
          <Link to="/add-service" className="text-black no-underline">
            <button className="px-3 py-1 text-black rounded-md hover:border hover:border-[#4F23B8] hover:border-[2px]">
              Add Service
            </button>
          </Link>
          <Link to="/create-service">
            <button className="px-3 py-1 text-black border border-[#4F23B8] rounded-md border-[2px]">
              Launch Service
            </button>
          </Link>
          <button
            className="text-black px-3 "
            onClick={toggleNavMenu} // Close the menu when clicked
          >
<CloseIcon/>
          </button>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;
