import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DescriptionIcon from '@mui/icons-material/Description';

interface SidebarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

interface ExternalLink {
  text: string;
  url: string;
  icon: React.ReactNode;
}

const externalLinks: ExternalLink[] = [
  { text: 'GitHub', url: 'https://github.com/jiggydas', icon: <GitHubIcon /> },
  { text: 'LinkedIn', url: 'https://linkedin.com/in/jigyansoo-das-85521b157', icon: <LinkedInIcon /> },
  { text: 'LeetCode', url: 'https://leetcode.com/jigyansoodas', icon: <EmojiEventsIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {
  const drawerContent = (
    <>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <CodeIcon sx={{ fontSize: 28, color: '#90caf9' }} />
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#e0e0e0' }}>
          Portfolio
        </Typography>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
      <Box sx={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Box sx={{ 
          overflowY: 'auto',
          overflowX: 'hidden',
          flex: 1,
          '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
          },
        }}>
          <List>
            <ListItem 
              component={Link} 
              to="/" 
              onClick={handleDrawerToggle}
              sx={{ 
                mx: 1,
                borderRadius: '8px',
                mb: 0.5,
                '&:hover': { 
                  bgcolor: 'rgba(144, 202, 249, 0.08)',
                  transform: 'translateX(4px)',
                }, 
                '&:focus': { 
                  bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                }, 
                '&:active': { 
                  bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                }, 
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <ListItemIcon sx={{ color: '#90caf9', minWidth: 40 }}><HomeIcon /></ListItemIcon>
              <ListItemText 
                primary="Home" 
                primaryTypographyProps={{ 
                  fontWeight: 500,
                  color: '#e0e0e0',
                  fontSize: '0.95rem'
                }} 
              />
            </ListItem>
            <ListItem 
              component={Link} 
              to="/experience" 
              onClick={handleDrawerToggle}
              sx={{ 
                mx: 1,
                borderRadius: '8px',
                mb: 0.5,
                '&:hover': { 
                  bgcolor: 'rgba(144, 202, 249, 0.08)',
                  transform: 'translateX(4px)',
                }, 
                '&:focus': { 
                  bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                }, 
                '&:active': { 
                  bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                }, 
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <ListItemIcon sx={{ color: '#90caf9', minWidth: 40 }}><WorkIcon /></ListItemIcon>
              <ListItemText 
                primary="Experience" 
                primaryTypographyProps={{ 
                  fontWeight: 500,
                  color: '#e0e0e0',
                  fontSize: '0.95rem'
                }} 
              />
            </ListItem>
            <ListItem 
              component={Link} 
              to="/projects" 
              onClick={handleDrawerToggle}
              sx={{ 
                mx: 1,
                borderRadius: '8px',
                mb: 0.5,
                '&:hover': { 
                  bgcolor: 'rgba(144, 202, 249, 0.08)',
                  transform: 'translateX(4px)',
                }, 
                '&:focus': { 
                  bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                }, 
                '&:active': { 
                  bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                }, 
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <ListItemIcon sx={{ color: '#90caf9', minWidth: 40 }}><CodeIcon /></ListItemIcon>
              <ListItemText 
                primary="Projects" 
                primaryTypographyProps={{ 
                  fontWeight: 500,
                  color: '#e0e0e0',
                  fontSize: '0.95rem'
                }} 
              />
            </ListItem>
            <ListItem 
              component={Link} 
              to="/contact" 
              onClick={handleDrawerToggle}
              sx={{ 
                mx: 1,
                borderRadius: '8px',
                mb: 0.5,
                '&:hover': { 
                  bgcolor: 'rgba(144, 202, 249, 0.08)',
                  transform: 'translateX(4px)',
                }, 
                '&:focus': { 
                  bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                }, 
                '&:active': { 
                  bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                }, 
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <ListItemIcon sx={{ color: '#90caf9', minWidth: 40 }}><ContactMailIcon /></ListItemIcon>
              <ListItemText 
                primary="Contact Me" 
                primaryTypographyProps={{ 
                  fontWeight: 500,
                  color: '#e0e0e0',
                  fontSize: '0.95rem'
                }} 
              />
            </ListItem>
          </List>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />
          <Box sx={{ px: 2, mb: 1 }}>
            <Typography 
              variant="subtitle2" 
              sx={{ 
                color: 'rgba(224, 224, 224, 0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              External Links
            </Typography>
          </Box>
          <List>
            {externalLinks.map((link) => (
              <ListItem
                key={link.text}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDrawerToggle}
                sx={{
                  mx: 1,
                  borderRadius: '8px',
                  mb: 0.5,
                  '&:hover': {
                    bgcolor: 'rgba(144, 202, 249, 0.08)',
                    transform: 'translateX(4px)',
                  },
                  '&:focus': {
                    bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                  },
                  '&:active': {
                    bgcolor: 'rgba(144, 202, 249, 0.12) !important',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <ListItemIcon sx={{ color: '#90caf9', minWidth: 40 }}>{link.icon}</ListItemIcon>
                <ListItemText
                  primary={link.text}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: '#e0e0e0',
                    fontSize: '0.95rem'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            backgroundColor: '#1a1a1a',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {drawerContent}
      </Drawer>
      {/* Permanent Drawer for Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            backgroundColor: '#1a1a1a',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar; 