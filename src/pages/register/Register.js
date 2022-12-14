import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ErrorAlert from "../../components/alerts/Error";
import SuccessAlert from "../../components/alerts/Success";

const Register = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL_API;
  const PATH = "/register";
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    edad: "",
    email: "",
    telefono: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    confirmPassword: "",
  });
  const [successRegister, setSuccessRegister] = useState(false);
  const [passErrorRegister, setPassErrorRegister] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    //check if password is equal to confirm password
    console.log(form.password);
    console.log(confirmPassword.confirmPassword);
    if (form.password != confirmPassword.confirmPassword) {
      console.log("password not equal to confirm password");
      //alert("Las contraseñas no coinciden");
      setPassErrorRegister(true);
    } 
    else {
      console.log("form", form);
      console.log(`${BASE_URL}${PATH}`)
      axios
        .post(`${BASE_URL}${PATH}`, form)
        .then(function (response) {
          console.log(response);
          /* navigate('/login') */
          setSuccessRegister(true);
          setPassErrorRegister(false);
          setErrorRegister(false);
          setForm({
            nombre: "",
            apellido: "",
            direccion: "",
            edad: "",
            email: "",
            telefono: "",
            password: "",
          })
          setConfirmPassword({
            confirmPassword: ""
          })
        
        })
        .catch(function (error) {
          console.log(error);
          setErrorRegister(true);
          setPassErrorRegister(false);
        });
    }
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
          Nuevo usuario
        </Typography>
        {successRegister ? <SuccessAlert>Usuario registrado correctamente</SuccessAlert> : null}
        {passErrorRegister ? <ErrorAlert>Las contraseñas no coinciden</ErrorAlert> : null}
        {errorRegister ? <ErrorAlert>Ocurrió un error en el registro. Intente nuevamente</ErrorAlert> : null}
        
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Nombre</InputLabel>
              <Input
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Apellido</InputLabel>
              <Input
                id="apellido"
                name="apellido"
                value={form.apellido}
                onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Dirección</InputLabel>
              <Input
                id="direccion"
                name="direccion"
                value={form.direccion}
                onChange={(e) => setForm({ ...form, direccion: e.target.value })}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Edad</InputLabel>
              <Input
              type="number"
                id="edad"
                name="edad"
                value={form.edad}
                onChange={(e) => setForm({ ...form, edad: e.target.value })}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
        </Grid>


        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input
                id="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Teléfono</InputLabel>
              <Input
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>

        </Grid>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Nueva Contraseña</InputLabel>
              <Input
                id="my-input"
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Repita Contraseña</InputLabel>
              <Input
                id="my-input"
                type="password"
                name="confirmPassword"
                value={confirmPassword.confirmPassword}
                onChange={(e) =>
                  setConfirmPassword({
                    ...confirmPassword,
                    confirmPassword: e.target.value,
                  })
                }
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid>
            <Button
              sx={{ marginTop: "50px" }}
              variant="outlined"
              onClick={onSubmit}
            >
              Registrarse
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
              id="btn-go-to-login">
                <Link to='/login'>Ir a Login</Link>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Register;
