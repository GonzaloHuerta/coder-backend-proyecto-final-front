import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ErrorAlert from "../../components/alerts/Error";

const Login = () => {
  axios.defaults.withCredentials = true;
  const BASE_URL = process.env.REACT_APP_BASE_URL_API;
  const PATH = "/login";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}${PATH}`, form)
      .then(function (response) {
        console.log(response);
        setErrorLogin(false);
        navigate('/')
      })
      .catch(function (error) {
        setErrorLogin(true);
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{ bgcolor: "#ffffff", padding: "50px", marginTop: "40px", marginBottom: "40px" }}
      >
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ marginBottom: "50px" }}
        >
          Iniciar sesión
        </Typography>
        {errorLogin ? <ErrorAlert>Error en el login. Intente nuevamente</ErrorAlert> : null}
        <Grid container spacing={2} justifyContent=""  sx={{ marginTop: 2 }}>
          <Grid item>
            <FormControl sx={{ m: 1, width: "350px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                id="email"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <FormControl sx={{ m: 1, width: "350px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Contraseña</InputLabel>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button
              sx={{ marginTop: "50px" }}
              variant="outlined"
              onClick={onSubmit}
            >
              Ingresar
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button 
              size="small" 
              sx={{ marginTop: "30px" }}
              variant="outlined" 
              color="secondary"
              id="btn-go-to-register">
                <Link to='/register'>Quiero Registrarme</Link>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Login;
