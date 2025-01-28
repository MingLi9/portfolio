import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo_Black from '../img/Logo_black.png';
import { Squash as Hamburger } from 'hamburger-react'

const Menu = () => {
    const [isOpen, setOpen] = useState(window.innerWidth > 704);
    return (
        <nav className="main-nav">
            <div><a href="/"><img src={logo_Black} alt="Logo" className="logo" /></a></div>
            {isOpen ?
                <div className="nav-links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/projects">Projects</Link>
                    <Link className="link" to="/aboutme">About me</Link>
                </div>
                :
                <></>
            }

            <Hamburger toggled={isOpen} toggle={setOpen} color="#3fc1c9" />
        </nav >
    );
};

export default Menu;