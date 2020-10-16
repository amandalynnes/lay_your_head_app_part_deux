import React from "react"
import { NavLink } from "react-router-dom"
import { Menu, Image } from "antd"
import {
    Switch,
    Route,
} from "react-router-dom";
import { NotFound } from "../pages/NotFound"
import Login from "../pages/login/Login"
import Registration from "../pages/Registration"
import HomePage from "../pages/HomePage"
// import Logo from "../logo.png"
// import Logo2 from "../logo2.png"
import Logo3 from "../logo3.png"
import "./Navbar.css"
export const Navbar = () => {
    return (
        <>

        <Image width={150} height={150} src={Logo3}></Image> 
            <Image width={1500} height={250} 
             src="https://www.artech.com/wp-content/uploads/2018/08/iStock-668218790_Community-Building-web.jpg"/>
            <Menu  mode="horizontal">
            <Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/">Log In!</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/register">Registration</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/home">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/something">NotFound</NavLink>
                </Menu.Item>
            </Menu>
            
            <Switch>
                <Route component={Login} exact path="/" />
                <Route component={HomePage} path="/home" />
                <Route component={Registration} path="/register" />
                <Route component={NotFound} path="*" />
            </Switch>
            
        </>
    )
}

