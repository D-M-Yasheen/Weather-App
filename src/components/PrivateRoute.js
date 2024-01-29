import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = (props) => {
    console.log("ss value ", sessionStorage.key("user-coord"))
    
    if (sessionStorage.getItem("user-coord") === null) {
        return <Navigate to='/' />
    }
    else {
        return props.children;
    }
}
