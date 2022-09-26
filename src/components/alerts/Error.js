import React from 'react';
import Alert  from "@mui/material/Alert";

const ErrorAlert = (props)=>{
    return(
        <Alert severity="error">{props.children}</Alert>
    )
}

export default ErrorAlert;