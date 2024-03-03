import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Sixbuttons = () => {
    return (

    <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10%', marginLeft: '12.5%', marginRight:'12.5%',  }}>
        <Button         
          sx={{
            width: '138px',
            height: '36px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(75, 86, 101, 1)',
            justifyContent: 'left',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0em',
            textTransform: 'none',           
            marginRight: '15px', 
            boxShadow: 'none'
          }}
        >
        Tools
        </Button>
        <Button
         
          sx={{
            width: '138px',
            height: '36px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(75, 86, 101, 1)',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0em',
            justifyContent: 'left',
            textTransform: 'none',
            marginRight: '15px', 
            boxShadow: 'none'
          }}
        >
          AWS Builder
        </Button>

        <Button
          
          sx={{
            width: '138px',
            height: '36px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(75, 86, 101, 1)',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0em',
            justifyContent: 'left',
            textTransform: 'none',
            marginRight: '15px', 
            boxShadow: 'none'
          }}
        >
          Start Build
        </Button>

        <Button
         
          sx={{
            width: '150px',
            height: '36px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(75, 86, 101, 1)',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0em',
            justifyContent: 'left',
            textTransform: 'none',
            marginRight: '15px', 
            boxShadow: 'none'
          }}
        >
          Build Supplies
        </Button>

        <Button
          
          sx={{
            width: '138px',
            height: '36px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(75, 86, 101, 1)',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0em',
            justifyContent: 'left',
            textTransform: 'none',
            marginRight: '15px',
            boxShadow: 'none'
          }}
        >
          Tooling
        </Button>

        <Button
          
          sx={{
            width: '138px',
            height: '36px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(75, 86, 101, 1)',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0em',
            justifyContent: 'left',
            textTransform: 'none',
            marginRight: '15px', 
            boxShadow: 'none'
          }}
        >
          BlueHosting
        </Button>
      </Box>
    )
        }
    export default Sixbuttons;
      

