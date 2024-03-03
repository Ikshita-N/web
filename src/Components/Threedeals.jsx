import React from 'react';
import { Grid, Paper } from '@mui/material';
import Deal1 from './Deal1';

const Threedeals = () => {
  return (
    <Paper sx={{ marginLeft: '12.5%', marginRight:'10%' }}>
      <Grid container spacing={0} sx={{ marginLeft: '-5%', marginRight:'20%' }}>
        <Grid item m={3} sx={{ margin: '0 6px' }}>
          <Deal1 />
        </Grid>
        <Grid item m={3} sx={{ margin: '0 6px' }}>
          <Deal1 />
        </Grid>
        <Grid item m={3} sx={{ margin: '0 6px' }}>
          <Deal1 />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Threedeals;
