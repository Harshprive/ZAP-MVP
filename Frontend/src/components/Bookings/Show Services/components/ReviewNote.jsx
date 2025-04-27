import React from 'react';
import { Box, Typography } from '@mui/material';
import { Info } from 'lucide-react'; // Use the lucide-react Info icon

const ReviewNote = ({ note }) => (
  <Box display="flex" alignItems="flex-start" gap={1} mb={1} >
    <Info className="text-gray-400 mt-1 h-8 w-12" size={16} /> {/* lucide-react Info icon */}
    <Typography variant="body2" color="text.secondary">
      {note}
    </Typography>
  </Box>
);

export default ReviewNote;
