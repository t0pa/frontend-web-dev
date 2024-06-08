import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#383434', // Customize primary color
    },
    secondary: {
      main: '#f50057', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto', // Customize font family
    h1: {
      fontWeight: 700, // Set font weight to bold (700)
      fontSize: '10rem',
      borderBottom: '2px solid #f50057', // Add border bottom to h1
      paddingBottom: '8px', // Add padding bottom to h1 to separate it from the border
      textShadow: '3px 3px 3px black', // Add black outline to text
    },
    body1:{
        textShadow: '5px 5px 5px black', // Add black outline to text

    },
  },
});

export default theme;
