import React from "react"
import { NavLink } from "react-router-dom"
import { Menu, Layout } from "antd"
import {
    Switch,
    Route,
} from "react-router-dom";
import { NotFound } from "../pages/NotFound"
import Registration from "../pages/Registration"
import "./Navbar.css"
const {Header} =Layout
const Home = () => <h1>home</h1>
export const Navbar = () => {
    return (
        <>
            <Menu  mode="horizontal">
            <Menu.Item>
                <h1>Lay Your Head</h1>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/">Home</NavLink>
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
                <Route component={NotFound} path="*" />
            </Switch>
        </>
    )
}

