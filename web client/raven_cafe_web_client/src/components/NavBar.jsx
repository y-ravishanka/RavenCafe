import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.scss";
import logo from "../assets/logo01.png";



const NavBar = () => {
    return (
        <div className='container'>
            <div className="logo">
                <img src={logo} alt="raven cafe logo" />
            </div>
            <div className="linkContainer">
                <Link to={"/"} className='navItem'>Home</Link>
                <Link to={"/about"} className='navItem'>About</Link>
            </div>
        </div>
    );
};

export default NavBar;