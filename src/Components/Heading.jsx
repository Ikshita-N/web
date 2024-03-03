import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { InfoOutlined as InfoOutlinedIcon, CheckCircleOutlined as CheckCircleOutlinedIcon, KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon } from '@mui/icons-material';

const Heading = () => {
  return (
    <Box
      sx={{
        width: '75%',
        height: '20%',
        position: 'absolute',
        top: '23.5%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(251, 252, 253, 1)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Best Website Builders in the US
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <hr
          style={{
            position: 'absolute',
            width: '100%',
            borderTop: '1px solid rgba(225, 228, 230, 1)',
            top: '100%',
            left: 0,
            marginBottom: '10px', // Add margin below the horizontal line
          }}
        />
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: 'rgba(75, 86, 101, 1)',
          padding: '10px',
          display: 'flex',
          alignItems: 'center', // Align items vertically
          justifyContent: 'space-between', // Align items horizontally
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleOutlinedIcon sx={{ marginRight: '5px' }} />
          Last Updated - February 22, 2020
          <IconButton color="inherit">
            <InfoOutlinedIcon />
          </IconButton>
          Advertising Disclosure
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          Top Relevant
          <IconButton color="inherit">
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
        </Box>
      </Typography>
      <Box sx={{ position: 'relative', marginTop: '-5px' }}>
        <hr
          style={{
            position: 'absolute',
            width: '100%',
            borderTop: '1px solid rgba(225, 228, 230, 1)',
            top: '100%',
            left: 0,
            marginTop: '0px', // Add margin below the horizontal line
          }}
        />
      </Box>
      
    </Box>
  );
};

export default Heading;
