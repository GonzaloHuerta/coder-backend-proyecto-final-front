import Container from "@mui/material/Container";
import React, {useState} from "react";
import {useLocation} from 'react-router-dom';

const useQuery=()=> {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
} 

const Admin = () => {
    let query = useQuery();
    console.log(query);
    return (
        <Container spacing={2} sx={{margin: 4}}>
            <h1>Información personal</h1>
            <p><strong>Nombre: </strong>{query.get("name")}</p>
            <p><strong>Apellido: </strong>{query.get("surname")}</p>
            <p><strong>Email: </strong>{query.get("email")}</p>
        </Container>
    );
}
export default Admin;
