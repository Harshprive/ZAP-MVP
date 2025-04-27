import React from "react";
import "./NearYou.css";
import { Link } from "react-router-dom";

const NearYou = ({ title, type, address, imageUrl }) => {
  return (
    <div className="Roomcard">
      
      <div className='Room-image'>
      <img src={imageUrl} alt="Room interior" className="room-image" />
      </div>
      
      
      <div className="Room-content">
        <div className=" h-[100px] md:h-[70px] pt-[5px]">
        <h1 className="Room-title">
          {title} <span className="type">({type})</span>
        </h1>
        <h6 className="Room-address">{address}</h6>
        </div>

        
       
        
        <Link to='/services/rent-service-room' className="view-more"> View more</Link>
      </div>
    </div>
  );
};

export default NearYou;
