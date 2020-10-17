import React from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Redirect } from "react-router"
import HomePage from "../pages/HomePage"
import {auth} from "../firebase"
import Registration from "../pages/Registration";

 const ProtectedRoute = ({ component: Component, ...rest }) => {   
    const [user] = useAuthState(auth)
    if(user)
    return <Redirect to="/" />
    else return <Route component={Registration} />
}

export default ProtectedRoute