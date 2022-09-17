import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ProductCard from "../../components/productCard/ProductCard";
import PromoSlider from "../../components/promoSlider/PromoSlider";
import Grid from "@mui/material/Grid";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Products = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL_API;
  const PATH = "/products";
  const [resultados, setResultados] = useState([]);
  const navigate = useNavigate();

  console.log(`${BASE_URL}${PATH}`);
  useEffect(() => {
    axios
      .get(`${BASE_URL}${PATH}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setResultados(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        navigate('/login')
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <PromoSlider />
      <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", padding: "50px" }}>
        <Grid container spacing={1}>
          {resultados.length > 0 &&
            resultados.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Products;
