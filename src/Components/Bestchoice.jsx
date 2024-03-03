import React from 'react';
import { Box, Typography } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const BestChoice = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      {/* Rectangle with "Best Choice" content */}
      <Box
        sx={{
          width: '136px',
          height: '34px',
          top: '332px',
          left: '278px',
          borderRadius: '0px 8px 8px 0px',
          backgroundColor: 'rgba(255, 119, 36, 1)',
          display: 'flex',
          alignItems: 'center',
          padding: '5px',
          position: 'absolute',
          marginLeft: '-10%',
          marginTop:'-24%'
        }}
      >
        <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, color: 'rgba(255, 255, 255, 1)', lineHeight: '24px', letterSpacing: '0em', textAlign: 'left', marginLeft:'5%' }}>
          Best Choice
        </Typography>
        <EmojiEventsOutlinedIcon sx={{ fontSize: '20px', marginLeft: '5px', color: 'rgba(255, 255, 255, 1)' }} />
      </Box>
    </Box>
  );
};

export default BestChoice;
