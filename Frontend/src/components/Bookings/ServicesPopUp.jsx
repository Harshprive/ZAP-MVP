import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SimpleServicePopup = ({ open, onClose, onSelect }) => {
  const handleSelect = (level) => {
    console.log('Selected:', level);
    if (onSelect) onSelect(level); // Pass the selected level to the parent
    if (onClose) onClose(); // Close the popup after selection
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Choose Service Level</DialogTitle>
      <DialogContent>
        <div style={{ padding: '16px' }}>
          {['High', 'Mid', 'Low'].map((level) => (
            <Button
              key={level}
              fullWidth
              variant="outlined"
              onClick={() => handleSelect(level.toLowerCase())}
              sx={{
                justifyContent: 'space-between',
                textTransform: 'none',
                marginBottom: '8px',
              }}
            >
              <Typography>{level}</Typography>
              <IconButton edge="end" size="small">
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleServicePopup;
