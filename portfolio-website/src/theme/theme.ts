import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#e0e0e0',
      secondary: 'rgba(224, 224, 224, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#e0e0e0',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#e0e0e0',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#e0e0e0',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#e0e0e0',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#e0e0e0',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#e0e0e0',
    },
    body1: {
      fontSize: '1rem',
      color: '#e0e0e0',
    },
    body2: {
      fontSize: '0.875rem',
      color: 'rgba(224, 224, 224, 0.7)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1a1a1a',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#333',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#444',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme; 