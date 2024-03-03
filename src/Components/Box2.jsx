import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BuilderImage from './Images/builder1.png'; // Import the image from the components folder
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BestValue from "./Bestvalue";
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';

const Box2 = () => {
    return (
        <div>
        <BestValue  />
      <Box
        sx={{
          width: '1024px',
          height: '255px',
          top: '347px',
          left: '284px',
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          display: 'flex',
          flexDirection: 'row',
          marginLeft:'12.5%',
          marginRight:'12.5%',
        }}
      >
        {/* First part of the row */}
        <Box sx={{ width: '25%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {/* Image */}
          <img src={BuilderImage} alt="Builder 1" style={{ width: '141px', height: '103px', top: '422px', left: '326px' }} />
          {/* Typography */}
          <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, lineHeight: '20px', letterSpacing: '0em', textAlign: 'center' }}>Builder</Typography>
        </Box>
  
       {/* Second part of the row */}
       <Box sx={{ width: '50%', padding: '20px' }}>
        {/* First layout */}
        <Box sx={{ width: '490px', height: '72px', top: '368px', left: '525px', padding: '10px', marginBottom: '20px' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'left', marginBottom: '10px',color: 'rgba(75, 86, 101, 1)'}}>
          <strong>SiteCraft 68-Inch Ultimate Web Design Studio</strong>- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', textAlign: 'left' }}>
          Main highlights
          </Typography>
        </Box>

        {/* Second layout */}
        <Box sx={{ width: '483px', height: '72px', top: '478px', left: '543px', padding: '10px' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'left', color: 'rgba(75, 86, 101, 1)', padding: '10px', marginTop:'-2%' }}>
          [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '12px', marginBottom: '20px' }}>
    <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'left', color: 'rgba(27, 136, 244, 1)', marginRight: '10px' }}>
      Show more
    </Typography>
    <KeyboardArrowDownIcon sx={{
        color: 'rgba(27, 136, 244, 1)',
    }}

    />
  </Box>


      </Box>
  
    {/* Third part of the row */}
<Box sx={{ width: '25%', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>  
  {/* Rectangle with content */}
  <Box
    sx={{
      width: '135px',
      height: '118px',
      borderRadius: '0px 0px 12px 12px',
      backgroundColor: 'rgba(243, 249, 255, 1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px',
    }}
  >
    <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '32px', fontWeight: 400, lineHeight: '48px', letterSpacing: '0em', textAlign: 'left', color: 'rgba(7, 71, 134, 1)', borderRadius: '12px', padding: '5px' }}>9.5</Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '0em', textAlign: 'center', color: 'rgba(7, 71, 134, 1)', borderRadius: '12px', padding: '5px' }}>Excellent</Typography>
    <Box sx={{ display: 'flex', gap: '2px' }}>
      <StarRoundedIcon sx={{ fontSize: '20px', color: 'gold' }} />
      <StarRoundedIcon sx={{ fontSize: '20px', color: 'gold' }} />
      <StarRoundedIcon sx={{ fontSize: '20px', color: 'gold' }} />
      <StarRoundedIcon sx={{ fontSize: '20px', color: 'gold' }} />
      <StarHalfRoundedIcon sx={{ fontSize: '20px', color: 'gold' }} />
    </Box>
  </Box>
  {/* View button */}
  <Button
    variant="contained"
    color="primary"
    size="large"
    sx={{
      width: '232px',
      height: '48px',
      borderRadius: '12px',
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      textTransform: 'none', 
    }}
  >
    View
  </Button>
</Box>



      </Box>
      </div>
    );
  };
  
  export default Box2;