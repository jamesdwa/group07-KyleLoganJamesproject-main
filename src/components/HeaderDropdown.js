import React from 'react';
import { NavLink } from 'react-router-dom';

export function HeaderDropdown(props) {
    const links = props.props.map((link, index) => {
        return <NavLink to={"/"+link} key={index}className="nav-link text-dark fs-2" aria-current={link}>{link}</NavLink>
        
    });

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {links}
            </div>
            </li>
        </ul>
    )
}