import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Transform } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from "axios";


const Header = () => {
    const theme = createTheme({
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "space-between",
                        backgroundColor: 'black',
                        height: '100px',
                    },
                },
            },
        },
    });

    const BASE_URL = process.env.REACT_APP_BASE_URL_API;
    const PATH = "/logout";
    
    const navigate = useNavigate();

    const handleLogout = (e)=>{
        e.preventDefault();
    
        axios
        .post(`${BASE_URL}${PATH}`)
        .then(function (response) {
            console.log(response);
            navigate('/login')
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
 return (
 
 <ThemeProvider theme={theme}>
        <AppBar position="sticky">
            <Toolbar>
                <Grid container spacing={2}  
                  direction="row"
                  alignItems="center">
                    <Grid item sx={ { cursor: 'pointer' } }>
                        <Link to='/'>
                            <img src = "https://user-images.githubusercontent.com/63796774/175135690-c16823ec-0808-4903-8d57-b8257983cde2.png" />
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={2}  
                  direction="row"
                  alignItems="center">
                    <Grid item sx={ { cursor: 'pointer' } }>
                        <Link to='/'>Home</Link>
                    </Grid>
                    <Grid item sx={ { cursor: 'pointer' } }>
                        <Link to='/login'>Login</Link>
                    </Grid>
                    <Grid item sx={ { cursor: 'pointer' } }>
                        <span onClick={handleLogout}>Logout</span>
                    </Grid>
                  </Grid>
                <Grid container spacing={2} 
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center">
                    <Avatar alt="Remy Sharp" sx={{ width: 45, height: 45, marginRight: '25px', cursor: 'pointer'  }} src="https://user-images.githubusercontent.com/63796774/175137557-ce74ef5f-cea9-4783-8c5c-c890a6ce38a8.jpeg" />
                    <ShoppingCartOutlinedIcon sx={{ color: 'white', fontSize: 30, marginRight: '25px', cursor: 'pointer'  }} />
                    <SettingsIcon sx={{ color: 'white', fontSize: 30, cursor: 'pointer'  }} />
                </Grid>
            </Toolbar>
        </AppBar>
 </ThemeProvider>
       
  
    );
  
}

export default Header