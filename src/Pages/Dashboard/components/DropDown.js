import React from 'react';
import {Link} from "react-router-dom";

const Dropdown = ({ title , isOpen, toggleDropdown, isCollapsed, items, handleContentChange, buttonClass, dropdownClass, activeLink }) => (
    <div className="mb-4">
        <button className={`w-full text-left flex items-center gap-2 ${buttonClass}`} onClick={toggleDropdown}>
            {!isCollapsed && title}
        </button>
        {isOpen && (
            <div className={`flex flex-col ml-4 mt-2 gap-4 justify-between ${dropdownClass}`}>
                {items.map((item, index) => (
                    <Link to={item.to}
                          key={index}
                          className={`w-full text-left flex items-center gap-2 ${activeLink === item.content ? 'bg-gray-600' : ''}`}
                          onClick={() => handleContentChange(item.content)}
                    >
                        {item.icon}
                        {!isCollapsed && item.label}
                    </Link>
                ))}
            </div>
        )}
    </div>
);

export default Dropdown;
