import React from 'react';
import {NavLink} from "react-router-dom";
import {CgHome} from "react-icons/cg";

const Links = ({ className , title , to , Icon}) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `sidebar--sidebar-content--collapse--menu-list--menu-item${
                isActive ? '--active' : ''
            }`
        }
    >
        <Icon className="sidebar--sidebar-content--collapse--menu-list--menu-item--menu-icon" />
        {title}
    </NavLink>
);

export default Links;
