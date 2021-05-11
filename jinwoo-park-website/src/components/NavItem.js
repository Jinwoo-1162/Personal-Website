import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

export const NavItem = (props) => {
    return (
        <li>
            <BrowserRouter>
                <Link to={props.tolink}>
                    {props.item}
                </Link>
            </BrowserRouter>
        </li>
    );
}