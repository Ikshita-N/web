import React from 'react';
import { AppBar, Toolbar, InputBase, Button, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'rgba(33, 39, 49, 1)' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
       
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Search Bar */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: 4,
              backgroundColor: 'white',
              width: '300px', 
              height: '40px', 
              paddingLeft: '40px', 
              marginRight: '10px' 
            }}
          >
            <InputBase
             // placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                pl: 2,
                pr: '30px', // Adjust padding-right to accommodate the search icon
                width: '100%',
                height: '100%'
              }}
            />
            {/* Search Icon */}
            <SearchIcon
              sx={{
                position: 'absolute',
                left: '10px', // Adjust left position for the search icon
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(0, 0, 0, 0.54)',
                paddingLeft: '10px' // Adjust left padding for the search icon
              }}
            />
          </Box>
        </Box>
        
        {/* Right side of the Navbar */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Add an empty Box for spacing */}
          <Box sx={{ width: '10px' }} />
          {/* Buttons */}
          <Button color="inherit" sx={{ mr: 2, textTransform: 'none',}}>Categories</Button>
          <Button color="inherit" sx={{ mr: 2, textTransform: 'none', }}>Website Builders</Button>
          <Button color="inherit" sx={{textTransform: 'none'}}>Today's Deals</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
