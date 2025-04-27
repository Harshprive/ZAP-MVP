// src/components/ProfileInfo.js
import React from 'react';
import { Chip as Badge } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ProfileInfo = ({ profile }) => {
  return (
    <div className="flex-1">
      <div className="flex justify-between w-[25%]">
        <div>
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-gray-600 text-sm">{profile.description}</p>
          <p className="text-gray-500 text-sm">{profile.email}</p>
        </div>
        <div className="flex items-start w-16 justify-between">
          <button size="small">
            <span> <EmailIcon/></span>
          </button>
          <button size="large">
            <span><MoreHorizIcon/></span>
          </button>
        </div>
      </div>

      {/* Interests */}
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.interests.map((interest, index) => (
          <button
          className="bg-gray-400 text-gray-800 hover:bg-gray-200 text-sm  px-3 rounded-md"
        >
          {interest}
        </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
