import React from 'react';
import { NavItem } from './NavItem.js';

export const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <NavItem item="Home" tolink="/"></NavItem>
                <NavItem item="About" tolink="/about"></NavItem>
                <NavItem item="Projects" tolink="/projects"></NavItem>
                <NavItem item="Skills" tolink="/skills"></NavItem>
                <NavItem item="Contact" tolink="/contact"></NavItem>
            </ul>
        </nav>
    );
}