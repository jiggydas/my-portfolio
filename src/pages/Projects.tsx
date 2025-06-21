import React from 'react';
import { Box, Typography, Paper, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import PageTransition from '../components/PageTransition';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Material-UI.',
    technologies: ['React', 'TypeScript', 'Material-UI', 'EmailJS'],
    githubUrl: 'https://github.com/jiggydas/my-portfolio',
  },
];

const Projects: React.FC = () => {
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
            Projects
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: 3,
            '& > *': {
              flex: { xs: '1 1 100%', md: '1 1 calc(50% - 12px)' },
              minWidth: { xs: '100%', md: 'calc(50% - 12px)' }
            }
          }}>
            {projects.map((project, index) => (
              <Box key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip 
                          key={tech} 
                          label={tech} 
                          size="small"
                          sx={{ 
                            bgcolor: 'rgba(144, 202, 249, 0.1)',
                            color: 'primary.main',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button 
                      startIcon={<GitHubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                    {project.liveUrl && (
                      <Button 
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </PageTransition>
  );
};

export default Projects; 