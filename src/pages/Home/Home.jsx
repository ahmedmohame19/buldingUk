import React from 'react'
import Navbar from "../../compnents/Navbar/Navbar.jsx"

import "./Home.scss"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="landing">
                <div className="back-image">
                    <div className="text">
                        <span>TRUSTED HANDYMAN SERVICES</span>
                        <h2>
                            Trusted & Reliable
                            <br />
                            Handyman Services
                        </h2>
                    </div>

                </div>
            </div>
        </>

    )
}
