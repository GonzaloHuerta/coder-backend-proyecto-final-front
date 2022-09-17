import { createTheme } from '@mui/material/styles';
import { green, purple, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#e9edee",
          margin: 0,
          padding: 0,
          fontFamily: 'Roboto, sans-serif',
          color: "#606060",
        },
        img: {
          width: "100%",
        },
        header: {
          color: '#ffffff',
          textDecoration: 'none'
        }
      }
    }
  }
  
});


export default theme