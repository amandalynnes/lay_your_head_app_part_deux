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
import "./Navbar.css"
import Logo from '../logo.png';
const Home = () => <h1>home</h1>
export const Navbar = () => {
    return (
        <>
        <Image width={150} height={150} src={Logo}></Image>
            <Menu  mode="horizontal">
            <Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/login">Log In!</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/register">Registration</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/something">NotFound</NavLink>
                </Menu.Item>
            </Menu>
            <Image width={1450} height={250} 
             src="https://www.artech.com/wp-content/uploads/2018/08/iStock-668218790_Community-Building-web.jpg"/>
            
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={Registration} path="/register" />
                <Route component={Login} path="/login" />
                <Route component={NotFound} path="*" />
            </Switch>
            
        </>
    )
}

