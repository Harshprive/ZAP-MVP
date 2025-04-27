import React from 'react';
import { Button } from '@mui/material';

const CreateServiceButton = ({ onClick }) => (
  <div className="pt-4 border-t">
    <button className="w-full bg-[#7149C7] p-[10px] text-white rounded-lg"
      
      onClick={onClick}
    >
      Create Service
    </button>
  </div>
);

export default CreateServiceButton;
