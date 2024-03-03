import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BuilderImage from './Images/builder1.png';


const Deal1 = () => {
    return (
        <Box
  sx={{
    width: '333px',
    height: '425px',
    top: '1806px',
    left: '300px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 1)',  
    marginLeft: '14%',
    marginRight:'12.5%',
    
  }}
>
  {/* Picture */}
  <img
    src={BuilderImage}
    alt="Builder 1"
    style={{
      width: '141px',
      height: '103',
      top: '1843',
      left:'396',
      display: 'block',
      margin: '0 auto',
      paddingTop: '35px', 
      marginBottom: '20%',
      
    }}
  />
 {/* Button */}
 <Button      
        sx={{
            marginLeft: '20.5%',
            height:'28px',
            width:'69px',
            marginLeft:'4%',
        
          borderRadius: '8px',
          backgroundColor: 'rgba(242, 244, 247, 1)',
          textTransform: 'none',
          fontFamily: 'Inter',
          fontSize: '13px',
          fontWeight: 400,
          lineHeight: '20px',
          
          textAlign: 'left',
          color: 'rgba(7, 71, 134, 1)',
        }}
      >
        20% Off
      </Button>

      <Button      
        sx={{
            marginLeft: '3%',
            height:'28px',
            width:'107px',      
          borderRadius: '8px',
          backgroundColor: 'rgba(242, 244, 247, 1)',
          textTransform: 'none',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',         
          textAlign: 'left',
          color: 'rgba(7, 71, 134, 1)',
        }}
      >
        Limited time 
      </Button>

       {/* Content1 */}
  <Typography
    variant="body1"
    sx={{
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: '0em',
      textAlign: 'center',
      color: 'rgba(98, 110, 121, 1)',
      marginTop: '2%',
    }}
  >
    Webbuilder 1
  </Typography>

         {/* Content1 */}
        <Box sx={{
            width: '284px',
height: '48px',
top: '2069px',
left: '320px',

        }}> 
        <Typography
    variant="body1"
    sx={{
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: 'rgba(98, 110, 121, 1)',
      marginTop: '1%',
      marginLeft: '4%',
    }}
  >
    Computer  Modern clasic with wix support
  </Typography>
  </Box>

  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:'1%' }}>
  {/* First Word */}
  <Typography
    variant="body1"
    sx={{
      fontFamily: 'Inter',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '28px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: 'rgba(92, 104, 116, 1)',
      marginLeft: '3%'
    }}
  >
    $39.96
  </Typography>
  {/* Second Word */}
  <Typography
    variant="body1"
    sx={{
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: 'rgba(159, 169, 179, 1)',
      marginLeft: '10px', // Adjust spacing between words
      marginRight: '5px', // Adjust spacing between words
    }}
  >
    $49.96
  </Typography>
  {/* Third Word */}
  <Typography
    variant="body1"
    sx={{
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: 'rgba(239, 76, 93, 1)',
      marginLeft: '2%'
    }}
  >
    (20% Off)
  </Typography>
</Box>

<Button
  variant="contained"
  color="primary"
  sx={{
    width: '292px',
    height: '48px',
    marginTop:'6%',
    marginLeft:'6%',
   

    borderRadius: '12px',
    background: 'rgba(27, 136, 244, 1)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'center',
    textTransform: 'none', 
  }}
>
  View Deal
</Button>

</Box>
    );
};

export default Deal1;