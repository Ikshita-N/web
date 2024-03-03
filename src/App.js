import React from 'react';
import Navbar from './Components/Navbar'; 
import Heading from './Components/Heading';
import Sixbuttons from './Components/Sixbuttons';
import Navigation from './Components/Navigation';
import Box1 from './Components/Box1';
import Box2 from './Components/Box2';
import Box3 from './Components/Box3';
import Box4 from './Components/Box4';
import {Typography} from '@mui/material';
import ThreeDeals from './Components/Threedeals';
import Signup from './Components/Signup';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
     <Navbar />
      <Heading />
      <Sixbuttons />
      <Navigation />
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Typography variant="body1" sx={{ fontFamily: 'Inter', fontSize: '32px', fontWeight: 400, lineHeight: '44px', letterSpacing: '0em', textAlign: 'left', color: 'rgba(44, 56, 74, 1)', padding: '10px', marginLeft:'12.5%', marginTop:'20%' }}>
        Related deals you might like for
        </Typography>
        <ThreeDeals />
        <Signup />
        <Footer />
        
 
      
    </div>
  );
}

export default App;
