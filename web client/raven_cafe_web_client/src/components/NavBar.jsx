import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.scss";
import logo from "../assets/logo01.png";
import { useSelector } from 'react-redux';

const NavBar = () => {

    const navIndex = useSelector(state=>state.navIndex.value);

    return (
        <div className='container'>
            <div className="logo">
                <img src={logo} alt="raven cafe logo" />
            </div>
            <div className="linkContainer">
                <Link to={"/"} className='navItem' style={navIndex === 1 ? { color: 'white' } : {}} >Home</Link>
                <Link to={'/menu'} className="navItem" style={navIndex === 2 ? { color: 'white' } : {}} >Today's Menu</Link>
                <Link to={'/blog'} className="navItem" style={navIndex === 3 ? { color: 'white' } : {}} >Blog</Link>
                <Link to={"/about"} className='navItem' style={navIndex === 4 ? { color: 'white' } : {}} >About</Link>
                <Link to={'/feedBack'} className="navItem" style={navIndex === 5 ? { color: 'white' } : {}} >FeedBack</Link>
            </div>
        </div>
    );
};

export default NavBar;