import React, { useState } from 'react'
import Navbar from "../../compnents/Navbar/Navbar.jsx"
import Intro from '../../compnents/Intro/Intro.jsx'
import "./Home.scss"

export default function Home() {
    const [Scrolled, setScrolled] = useState(false);

    return (
        <>
            <Navbar Scrolled={Scrolled} setScrolled={setScrolled} />
            <Intro />
        </>

    )
}
