import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Navbar.css';

export const NavItem = (props) => {
    return (
        <li className="nav-item" id={props.item}>
                <Link to={props.tolink} onClick={() => props.activec(props.item)} >
                    {props.item}
                </Link>
        </li>
    );
}