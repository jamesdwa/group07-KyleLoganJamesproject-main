import React from 'react';
import { NavLink } from 'react-router-dom';

export function HeaderNonActiveDropdown(props) {
    const links = props.props.map((link, index) => {
        if(index === 0){
            return <li key={index}><NavLink to={"/"+link} className="nav-link text-white fs-2 mt-3 p-0" aria-current={link}>{link}</NavLink></li>
        } else {
            return <li key={index}><NavLink to={"/"+link} className="nav-link text-white fs-2 p-0" aria-current={link}>{link}</NavLink></li>
        }
       
    });

    return (
        <ul className="navBarMargin navbar-nav ml-auto smallHide">
            {links}
        </ul>
    )
}