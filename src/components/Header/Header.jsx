import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='orders'>Orders</NavLink>
            <NavLink to='about'>about</NavLink>
            <NavLink to='grandpa'>GrandPa</NavLink>
        </nav>
    );
};

export default Header;