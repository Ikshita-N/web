import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Signup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "13.5%",
        marginRight:'12.5%',
        marginTop: "3%",
        marginBottom:'3%'
      }}
    >
      <Box
        sx={{
          width: "398px",
          height: "88px",
          top: "2301px",
          left: "338px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "32px",
            fontWeight: 400,
            lineHeight: "44px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "rgba(92, 104, 116, 1)",
          }}
        >
          Sign up and get exclusive special deals
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          width: "57px",
          height: "20px",
          top: "2325px",
          left: "1255px",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginRight: "3%",

          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
          letterSpacing: "0.7px",
          textAlign: "center",
          textTransform: 'none', 
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;
