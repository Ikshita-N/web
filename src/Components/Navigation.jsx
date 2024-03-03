// Navigation.jsx

import React from 'react';
import { Typography, Box } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Navigation = () => {
  return (
    <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: 'rgba(114, 125, 135, 1)', display: 'flex', alignItems: 'center', marginLeft: '12.5%', marginRight:'12.5%', marginTop: '-0%'}}>
      <Box mr={1}>Home</Box>
      <KeyboardArrowRightOutlinedIcon />
      <Box ml={1} mr={1}>Hosting for all</Box>
      <KeyboardArrowRightOutlinedIcon />
      <Box ml={1} mr={1}>Hosting</Box>
      <KeyboardArrowRightOutlinedIcon />
      <Box ml={1} mr={1}>Hosting6</Box>
      <KeyboardArrowRightOutlinedIcon />
      <Box ml={1} mr={1}>Hosting5</Box>
    </Typography>
  );
};

export default Navigation;
