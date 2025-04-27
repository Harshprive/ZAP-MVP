import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, MessageSquare, ClipboardList, Clock, Menu } from 'lucide-react';
import CloseIcon from "@mui/icons-material/Close";
import BuildIcon from "@mui/icons-material/Build";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import "./SideBar.css";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();
  const state = location.state || {}; // Retrieve state from current location
  const { serviceName } = state; // Extract serviceName if available

  const handleLinkClick = (e, path) => {
    // Close the sidebar and navigate
    toggleSidebar();

    // If there's no service name but the target is 'schedule-services', prevent navigation
    if (path === "/search-booking/schedule-services" && !serviceName) {
      e.preventDefault();
      alert("Please select a service before scheduling.");
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={toggleSidebar}>
        <CloseIcon />
      </button>
      <div className="sidebar-menu">
        <Link
          to="/services"
          state={{}} // No state needed here
          onClick={(e) => handleLinkClick(e, "/services")}
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item">
            <BuildIcon className="menu-icon" />
            <span>Services</span>
          </div>
        </Link>

        <Link
          to="/search-booking/schedule-services"
          state={{ serviceName }} // Pass the current serviceName
          onClick={(e) => handleLinkClick(e, "/search-booking/schedule-services")}
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item">
            <EventAvailableIcon className="menu-icon" />
            <span>Schedule Services</span>
          </div>
        </Link>
        <div className="menu-item">
          <SupportAgentIcon className="menu-icon" />
          <span>Support</span>
        </div>
        
        <Link
          to="/services/own-services"
           // Pass the current serviceName
           onClick={(e) => handleLinkClick(e, "/search-booking/schedule-services")}
           style={{ textDecoration: "none" }}
          
        >
          <div className="menu-item">
          <ClipboardList size={20} />
            <span className="ml-2">Own Services</span>
          </div>
        </Link>

        <Link
          to="/services/Orders"
          
          
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item">
          <ClipboardList size={20} />
            <span className="ml-2">Order</span>
          </div>
        </Link>
        <Link
          to="/services/Message-and-takeway"
          
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item">
          <MessageSquare size={20} /> 
            <span className="ml-2">Message</span>
          </div>
        </Link>


        
        
        <Link
          to="/services/tracker"
          
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item">
          <Clock size={20}  />
            <span className="ml-2">In Process</span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}
