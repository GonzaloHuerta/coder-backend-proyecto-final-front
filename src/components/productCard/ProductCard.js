import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import axios from "axios";

const ProductCard = ({ product, productAdded }) => {
  axios.defaults.withCredentials = true;
  
  const [userSession, setUserSession] = useState('');
  const [idUserCart, setIdUserCart] = useState('');
  //const [productoAgregado, setProductoAgregado] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL_API;
  const PATH = "/carts/user";
  const PATH_ATC = '/carts/';

  const handleAddToCart = (prod)=>{
    let user = window.sessionStorage.getItem('userId');
    let idUser;
    setUserSession(user);
    
    //get user cart
    axios
      .get(`${BASE_URL}${PATH}/${user}`)
      .then(function (response) {
        //console.log("ATC: ", response.data);
        setIdUserCart(response.data);
        window.sessionStorage.setItem('cartUserId', response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 

      //add product
      axios
      .post(`${BASE_URL}${PATH_ATC}${idUserCart}/productos`, [prod])
      .then(function (response) {
        //console.log("agregado?: ", response.data);
        setIdUserCart(response.data);
        //setProductoAgregado(true);
        productAdded(true);
        setTimeout(() => {
          productAdded(false);
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
        //setProductoAgregado(false);
        productAdded(false);
      })
      .then(function () {
        // always executed
      }); 


  }

  return (
    <>
      <Card sx={{ maxWidth: 280, minHeight: 450, marginBottom: 5 }}>
        <CardMedia
          component="img"
          height="300"
          image={product.thumbnail}
          sx={{ padding: 3 }}
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.nombre}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            USD {product.precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.descripcion}
          </Typography>
          <AddShoppingCartOutlinedIcon sx={{ color: 'black', marginTop: 3, fontSize: 30, cursor: 'pointer'  }} onClick={()=>handleAddToCart(product)} />
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
