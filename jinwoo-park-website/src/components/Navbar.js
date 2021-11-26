import React, { useEffect, useState } from 'react';
import { NavItem } from './NavItem.js';
import '../CSS/Navbar.css'

export const Navbar = (props) => {
    const [NavItemActive, setNavItemActive] = useState('Home');

    useEffect(() => {
        if (NavItemActive.length > 0) {
            document.getElementById(NavItemActive).classList.add('active');
        }
    }, [NavItemActive]);

    const activate = (x) => {
        setNavItemActive(x);

        if (NavItemActive.length > 0) {
            document.getElementById(NavItemActive).classList.remove('active');
        }
    }

    return (
        <nav>
            <ul>
                <NavItem item="Home" tolink="/" activec={activate}></NavItem>
                <NavItem item="About" tolink="/about" activec={activate}></NavItem>
                <NavItem item="Projects" tolink="/projects" activec={activate}></NavItem>
                <NavItem item="Skills" tolink="/skills" activec={activate}></NavItem>
                <NavItem item="Contact" tolink="/contact" activec={activate}></NavItem>
            </ul>
        </nav>
    );    
}