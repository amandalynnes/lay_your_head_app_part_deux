import React from "react"
import { NavLink } from "react-router-dom"
import { Menu, Layout, Image } from "antd"
import {
    Switch,
    Route,
} from "react-router-dom";
import { NotFound } from "../pages/NotFound"
import Login from "../pages/login/Login"
import Registration from "../pages/Registration"
import "./Navbar.css"
import Logo from '../logo.png';


const {Header} =Layout
const Home = () => <h1>home</h1>
export const Navbar = () => {
    return (
        <>
        <Image width={100} height={100} src={Logo}></Image>
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
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={Registration} path="/register" />
                <Route component={Login} path="/login" />
                <Route component={NotFound} path="*" />
            </Switch>
        </>
    )
}

