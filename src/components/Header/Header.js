import React from 'react';
import './Header.css'
// import './images.jfif'

const Header = () => {
    return (
        
        <nav className='header'>
            <div className='logo-area'>
            <a className='logo' href="/logo">Favorite Food</a>
            {/* <img src="./images.jfif" alt="" /> */}
            </div>
            <div className='header-link'>
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/login">Login</a>
                <a href="/about">About</a>
            </div>
        </nav>
        
    );
};

export default Header;