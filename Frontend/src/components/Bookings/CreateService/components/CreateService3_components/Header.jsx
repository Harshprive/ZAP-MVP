import React from 'react';
import { Button } from '@mui/material';
import { StarIcon } from 'lucide-react';

const Header = ({ title, rating, reviews, status }) => (
  <div className="flex justify-between ">
    <div className="items-center gap-2">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="flex items-center gap-1">
        <StarIcon className="w-4 h-4 fill-purple-600 text-purple-600" />
        <span className="text-sm font-medium">{rating}</span>
        <span className="text-sm text-gray-500">({reviews} reviews)</span>
      </div>
    </div>
    <div className="flex justify-between items-start">
      <Button size="small" variant="contained" color="secondary">
        {status}
      </Button>
    </div>
  </div>
);

export default Header;
