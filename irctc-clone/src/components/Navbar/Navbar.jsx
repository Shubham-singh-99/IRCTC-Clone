import React from "react";
import './Navbar.css'

const Navbar = () =>{
    return (
        <div className="navbar">
                <h1>IRCTC</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>

        </ul>
        </div>
    )
}

export default Navbar;