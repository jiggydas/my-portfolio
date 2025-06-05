import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PageTransition from '../components/PageTransition';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add form submission logic here
  };

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
            Contact
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" paragraph>
                Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button
                  startIcon={<EmailIcon />}
                  href="mailto:your.email@example.com"
                  variant="outlined"
                >
                  Email
                </Button>
                <Button
                  startIcon={<LinkedInIcon />}
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                >
                  LinkedIn
                </Button>
                <Button
                  startIcon={<GitHubIcon />}
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                >
                  GitHub
                </Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Box>
        </Paper>
      </Box>
    </PageTransition>
  );
};

export default Contact; 