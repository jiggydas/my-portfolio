import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import PageTransition from '../components/PageTransition';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '80vh',
        textAlign: 'center'
      }}>
        <Box sx={{ maxWidth: 800, p: 2 }}>
          <Typography variant="h2" component="h1" sx={{ 
            fontWeight: 600, 
            mb: 2,
            fontSize: { xs: '2.5rem', sm: '3.75rem' }
          }}>
            Hi, I'm Jigyansoo Das.
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ 
            mb: 4,
            fontSize: { xs: '1.2rem', sm: '1.5rem' }
          }}>
            A passionate Software Engineer dedicated to building innovative solutions and turning complex ideas into elegant, high-performance applications.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
            <Button
              component={Link}
              to="/experience"
              variant="outlined"
              size="large"
              startIcon={<WorkHistoryIcon />}
              sx={{ textTransform: 'none' }}
            >
              My Professional Journey
            </Button>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ textTransform: 'none' }}
            >
              Explore My Work
            </Button>
          </Box>
        </Box>
      </Box>
    </PageTransition>
  );
};

export default Home; 