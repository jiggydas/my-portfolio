import React, { useRef, useState } from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PageTransition from '../components/PageTransition';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

      const templateParams = {
        user_name: name,
        user_email: email,
        title: title,
        message: message,
        send_time: new Date().toLocaleString(),
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
            // Reset form fields
            setName('');
            setEmail('');
            setTitle('');
            setMessage('');
        }, (error) => {
            console.log(error.text);
            alert("An error occurred, please try again.");
        });
      }
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
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            width: '100%',
          }}>
            <Box sx={{ flex: 1, maxWidth: 600, textAlign: 'center' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
                Have a Project in Mind? Let's Connect!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                I'm always excited to discuss new ideas, collaborate on projects, or answer any questions you might have. Fill out the form below and let's start a conversation.
              </Typography>
              <form ref={form} onSubmit={sendEmail}>
                <TextField
                  fullWidth
                  label="Name"
                  name="user_name"
                  variant="outlined"
                  margin="normal"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="user_email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  variant="outlined"
                  margin="normal"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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