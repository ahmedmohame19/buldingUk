import React from 'react'
import Logo from "../../Asstes/Logo/bulding.png";
import "./Navbar.scss"

export default function Navbar() {
    return (
        <div>
            <nav>
                <span className='logo'>
                    <img src={Logo} alt="" />
                </span>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </div>
    )
}
