import React from 'react';
import ReactDOM from 'react-dom';
import theme from "./ThemeConfig"
import {  ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Page404 from '././pages/page404/Page404';
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Chat from "./pages/chat/Chat";
import Admin from "./pages/userAdmin/Admin";
import Cart from './pages/cart/Cart';
import CssBaseline from '@mui/material/CssBaseline';
import axios from "axios";

let isLogged = false;
let userData;
const BASE_URL = process.env.REACT_APP_BASE_URL_API;
const PATH = "/session";

//GET SESSION USER ID
axios
.get(`${BASE_URL}${PATH}`)
.then(function (response) {
  isLogged = true;
  userData = response;
})
.catch(function (error) {
  isLogged = false;
  console.log(error);
})
.then(function () {
    // always executed
});



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products isLogged={isLogged} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


