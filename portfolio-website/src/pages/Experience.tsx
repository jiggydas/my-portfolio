import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import PageTransition from '../components/PageTransition';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Developer',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Led the development of multiple web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved application performance by 40%.',
  },
  {
    title: 'Software Engineer',
    company: 'Previous Company',
    period: '2020 - 2022',
    description: 'Developed and maintained RESTful APIs, implemented frontend features using React, and collaborated with cross-functional teams to deliver high-quality software solutions.',
  },
];

const Experience: React.FC = () => {
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
            Experience
          </Typography>
          <Box sx={{ mt: 4 }}>
            {experiences.map((exp, index) => (
              <Box key={index} sx={{ mb: 4, position: 'relative' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'background.paper',
                      flexShrink: 0,
                    }}
                  >
                    <WorkIcon />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {exp.company}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 2 }}
                    >
                      {exp.period}
                    </Typography>
                    <Typography variant="body1">
                      {exp.description}
                    </Typography>
                  </Box>
                </Box>
                {index < experiences.length - 1 && (
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      left: 20,
                      top: 60,
                      bottom: -32,
                      width: 2,
                      bgcolor: 'divider',
                    }} 
                  />
                )}
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </PageTransition>
  );
};

export default Experience; 