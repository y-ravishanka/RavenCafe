import React from 'react';
import '../styles/Footer.scss';
import logo from '../assets/logo01.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <ul className="footerList">
                <li>RavenCafe © 2023</li>
                <li><Link to={'/'} className='linkItem'>Home</Link></li>
                <li><Link to={'/blog'} className='linkItem'>Blog</Link></li>
                <li><Link to={'/menu'} className='linkItem'>Today's Menu</Link></li>
                <li><Link to={'/about'} className='linkItem'>Contact</Link></li>
                <li><Link to={'/feedBack'} className='linkItem'>Leave a FeedBack</Link></li>
            </ul>
            <div className="createTitle"><Link to={'/creator'}>About Creator</Link></div>
        </div>
    );
};

export default Footer;