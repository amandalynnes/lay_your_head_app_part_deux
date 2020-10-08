import React from "react"
import { NavLink } from "react-router-dom"
import {  Menu } from "antd"
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {NotFound} from "../pages/NotFound"
import "./Navbar.css"

const Home =()=> <h1>home</h1>
export const Navbar = () => {
    return (
        <> 
         <nav>  
             <ul>   
                 <NavLink to="/">Home</NavLink>
                 <NavLink to="/something">NotFound</NavLink>
             </ul>
         </nav>
        <Switch>    
            <Route component={Home} exact path="/" />
            <Route component={NotFound} path="*" />
        </Switch>
       </>     
    )
}

