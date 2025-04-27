import React from 'react';
import { Card, CardContent } from '@mui/material';
import { MapPin } from 'lucide-react'; // Replace this if avoiding lucide-react
import { Link } from 'react-router-dom';

const NearYouPageCard = ({ image, title, description, distance, status, link }) => {
  return (
    <Link to={link} className="block w-64 overflow-hidden no-underline text-inherit">
      <Card className="cursor-pointer">
        <div className="relative h-32">
          <img 
            src={image}
            alt="Card image"
            className="w-full h-full object-cover"
          />
          {/* Smaller Active Status Indicator */}
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-1.5 py-0.5">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                status === 'Active' ? 'bg-green-500' : 'bg-red-500'
              }`}
            ></div>
            <span className="text-[9px] text-white font-medium">{status}</span>
          </div>
        </div>
        
        <CardContent className="p-3">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-sm">{title}</h3>
            {/* Distance Indicator */}
            <div className="flex items-center gap-1 text-gray-500">
              <MapPin className="w-3 h-3" />
              <span className="text-xs">{distance}</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NearYouPageCard;
