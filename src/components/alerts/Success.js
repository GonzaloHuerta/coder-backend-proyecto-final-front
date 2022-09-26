import React from 'react';
import Alert  from "@mui/material/Alert";

const SuccessAlert = (props)=>{
    return(
        <Alert severity="info">{props.children}</Alert>
    )
}

export default SuccessAlert;