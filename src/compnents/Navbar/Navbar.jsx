import React, { useEffect, useState } from 'react'
import Logo from "../../Assets/Logo/bulding.png";
import "./Navbar.scss"

export default function Navbar({ Scrolled, setScrolled }) {


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset;
            if (offset > 0) {
                setScrolled(true);
            } else if (offset === 0) {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [Scrolled]);


    return <nav className={Scrolled ? "navbar Scrolling px-4" : "navbar px-3"}>
        <img src={Logo} alt="..." loading='lazy' className='logo' />
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <ul className='d-flex list-unstyled Links align-items-center'>
            <li className='nav-item'>
                <p className="nav-link">Home</p>
            </li>
            <li className='nav-item'>
                <p className="nav-link">About us</p>
            </li>
            <li className='nav-item'>
                <p className="nav-link">Why us</p>
            </li>
            <li className='nav-item'>
                <p className="nav-link">Service</p>
            </li>
            <li className='nav-item'>
                <p className="nav-link">Contact us</p>
            </li>
        </ul>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <img src={Logo} alt="..." loading='lazy' className='logo' />
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className='nav-item'>
                        <p className="nav-link">Home</p>
                    </li>
                    <li className='nav-item'>
                        <p className="nav-link">About us</p>
                    </li>
                    <li className='nav-item'>
                        <p className="nav-link">Why us</p>
                    </li>
                    <li className='nav-item'>
                        <p className="nav-link">Service</p>
                    </li>
                    <li className='nav-item'>
                        <p className="nav-link">Contact us</p>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

}
