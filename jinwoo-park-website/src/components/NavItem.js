import React from 'react';
import {Link} from 'react-router-dom';

export const NavItem = (props) => {
    return (
        <li id={props.item}>
                <Link to={props.tolink} onClick={() => props.activec(props.item)} >
                    {props.item}
                </Link>
        </li>
    );
}