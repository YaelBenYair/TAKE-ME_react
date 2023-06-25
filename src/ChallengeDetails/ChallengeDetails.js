import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ChallengeInput from './ChallengeInput';



export default function ChallengDetails() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <ChallengeInput/>
          <ChallengeInput/>
          <ChallengeInput/>
          <ChallengeInput/>
          <ChallengeInput/>
        
      </Grid>
    </Box>
  );
}