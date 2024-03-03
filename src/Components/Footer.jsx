import React from "react";
import { Box, Typography } from "@mui/material";
import {KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: "1592px",
        height: "452px",
        top: "2432px",
        left: "11px",
        background: "rgba(33, 39, 49, 1)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        marginRight:'12.5%',
      }}
    >
      {/* Categories */}
      <Box sx={{
        marginLeft:'35%',
        marginTop:'10%',
      }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0em",
           
            color: "rgba(255, 255, 255, 1)",
            padding: "20px",
          }}
        >
          CATEGORIES
        </Typography>
        <Typography
          sx={{
            fontFamily: " Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(182, 189, 196, 1)",
            marginLeft:'5%',
            
          }}
        >
          Web Builder
        </Typography>
        <Typography
          sx={{
            fontFamily: " Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(182, 189, 196, 1)",
            marginLeft:'5%',
          }}
        >
          Hosting
        </Typography>
        <Typography
          sx={{
            fontFamily: " Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(182, 189, 196, 1)",
            marginLeft:'5%',
          }}
        >
          Data Center
        </Typography>
        <Typography
          sx={{
            fontFamily: " Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(182, 189, 196, 1)",
            marginLeft:'5%',
          }}
        >
          Robotic-Automation
        </Typography>
      </Box>

      {/* Contact */}
      <Box sx={{
         marginLeft:'15%',
        marginTop:'10%',
      }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(255, 255, 255, 1)",
            padding: "20px",
            marginLeft:'-5%',

          }}
        >
          CONTACT
        </Typography>

        <Typography
          sx={{
            fontFamily: " Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(182, 189, 196, 1)",
          }}
        >
          Contact
        </Typography>
        <Typography
          sx={{
            fontFamily: " Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(182, 189, 196, 1)",
          }}
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{
            fontFamily: " Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(182, 189, 196, 1)",
          }}
        >
          Terms Of Service
        </Typography>
        <Typography
          sx={{
            fontFamily: " Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(182, 189, 196, 1)",
          }}
        >
          Categories
        </Typography>
        <Typography
          sx={{
            fontFamily: " Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(182, 189, 196, 1)",
          }}
        >
          About
        </Typography>
      </Box>

      {/* United States */}
      <Box sx={{
         marginLeft:'-20%',
        marginTop:'20%',
      }}>
        <Typography
          
          sx={{
            fontFamily: 'Inter',
            fontSize: '13px',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'rgba(209, 214, 218, 1)',
            padding: '20px',
          }}
        >
          United States
          <KeyboardArrowDownOutlinedIcon  sx={{
            marginLeft:'0%',
            marginBottom: '-1%'
          }}/>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
