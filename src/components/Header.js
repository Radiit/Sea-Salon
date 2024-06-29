// src/components/Header.js
import React from 'react';
import './style/Header.css';
import logo from '../assets/logo.png';
import heroImage from '../assets/Hero.png';

const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="navbar">
                <img src={logo} alt="SEA Salon Logo" className="logo" />
                <nav>
                    <a href="#login" className="login">Login</a>
                </nav>
            </div>
            <div className="hero-content">
                <div className="hero-blur">
                    <h1>SEA<br/>SALON</h1>
                    <p>Beauty and Elegance Redefined</p>
                    <div className="design-info">
                        <p>DESIGN BY • SWAMI NAWALE</p>
                        <a href="https://www.figma.com/community/file/1150674330276958180/hair-salon-web-design">https://www.figma.com/community/file/1150674330276958180/hair-salon-web-design</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
