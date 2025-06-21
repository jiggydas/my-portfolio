import React from 'react';
import { Box, Typography, Button, Chip, Divider } from '@mui/material';
import PageTransition from '../components/PageTransition';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Link } from 'react-router-dom';

const skills = [
  'Java', 'Python', 'React', 'Docker', 'Kubernetes', 'AWS', 'OCI', 'Jenkins', 
  'Github Actions', 'Apache Kafka', 'RabbitMQ', 'Terraform', 'PostgreSQL', 
  'MySQL', 'MongoDB', 'Grafana', 'Linux'
];

const Home: React.FC = () => {
  return (
    <PageTransition>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: 'calc(100vh - 64px)',
        textAlign: 'center',
        p: 2
      }}>
        <Box>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
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
          </Box>
          <Divider sx={{ my: 4, width: '50%', mx: 'auto' }} />
          <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 500 }}>
              Key Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>
              {skills.map((skill) => (
                <Chip 
                  key={skill} 
                  label={skill}
                  variant="outlined"
                  sx={{ 
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: 'text.secondary',
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                    p: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(144, 202, 249, 0.08)',
                      borderColor: '#90caf9',
                      color: '#90caf9',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                />
              ))}
            </Box>
          </Box>
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