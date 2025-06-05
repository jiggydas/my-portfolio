import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import PageTransition from '../components/PageTransition';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="body1" paragraph>
            I'm a Full Stack Developer passionate about creating modern, efficient, and user-friendly applications.
          </Typography>
          <Typography variant="body1">
            Explore my experience, projects, and get in touch to discuss potential opportunities.
          </Typography>
        </Paper>
      </Box>
    </PageTransition>
  );
};

export default Home; 