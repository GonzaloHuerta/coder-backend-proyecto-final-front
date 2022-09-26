import React, {useEffect, useState} from 'react';
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import SuccessAlert from "../../components/alerts/Success";

const Cart = ()=>{
  const BASE_URL = process.env.REACT_APP_BASE_URL_API;
  const PATH = "/carts";
  const ORDER_PATH = "/send-order"
  const [resultados, setResultados] = useState([]);
  const [actualUserId, setActualUserId] = useState(window.sessionStorage.getItem('cartUserId'));
  const [actualUserData, setActualUserData] = useState();
  const [pedidoEnviado, setPedidoEnviado] = useState(false);
    
  useEffect(() => {
    //obtengo productos del cart segun id de usuario
      axios
        .get(`${BASE_URL}${PATH}/${actualUserId}`)
        .then(function (response) {
        // handle success
        console.log(response);
        setResultados(response.data.productos);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        })
  }, [])

  useEffect(() => {
    //obtengo data de usuario actual
    let userData = JSON.parse(window.sessionStorage.getItem('userLogged')).data;
    setActualUserData(userData)
  }, [])

  const handleEnviarPedido = ()=>{
    console.log("Enviar por mail, sms y whatsapp: ", resultados);
    let data = {
      productos: resultados,
      userData: actualUserData
    }
    axios
      .post(`${BASE_URL}${ORDER_PATH}`, data)
      .then(function (response) {
        console.log(response)
        setPedidoEnviado(true);
      })
      .catch(function (error) {
        setPedidoEnviado(false);
        console.log(error);
      })
      .then(function () {
        console.log("ALWAYS")
      });
  }
      
  return(
    <React.Fragment>
      <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", padding: "50px" }}>
        <Grid container spacing={1}>
          {resultados.length > 0 ?
            <Container>
              <table>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th >Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {resultados.map((product) => (
                    <tr >
                        <td>{product._id.nombre}</td>
                        <td>{product.cantidad}</td>
                    </tr>
                  ))
                  }
                </tbody>
                
              </table> 
          
              <Button
                sx={{ marginTop: "30px", marginBottom: "30px" }}
                variant="outlined"
                onClick={handleEnviarPedido}
                >
                Enviar pedido
              </Button>
              {pedidoEnviado ? <SuccessAlert sx={{ marginTop: "50px" }}>Pedido enviado correctamente</SuccessAlert> : null}
            </Container>
                      
            : 
            <Container sx={{textAlign: 'center'}}><CircularProgress /></Container>
          }
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Cart;