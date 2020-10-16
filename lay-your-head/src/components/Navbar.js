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
import Logo from "../logo.png"
import "./Navbar.css"
export const Navbar = () => {
    return (
        <>

        <Image width={150} height={150} src={Logo}></Image> 
            <Image width={1450} height={250} 
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
            </Menu>
            
            <Switch>
                <Route component={HomePage} exact path="/home" />
                <Route component={Registration} path="/register" />
                <Route component={Login} path="/" />
                <Route component={NotFound} path="*" />
            </Switch>
            
        </>
    )
}

