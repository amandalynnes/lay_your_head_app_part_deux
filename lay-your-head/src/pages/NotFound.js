import React from "react"
import "./NotFound.css"
import { Navbar } from "../components/Navbar"
export const NotFound = () => {
    return (
        <>
            <div className="notFound">
                <h1>
                    Page not found...
                </h1>
                <img src="https://img.icons8.com/dotty/80/000000/nothing-found.png" alt="not found page" />
            </div>
        </>
    )
}