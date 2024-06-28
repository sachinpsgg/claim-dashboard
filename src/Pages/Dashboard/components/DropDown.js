import React from 'react';

const Dropdown = ({ title , isOpen, toggleDropdown, isCollapsed, items, handleContentChange, buttonClass, dropdownClass, activeLink }) => (
    <div className="mb-4">
        <button className={`w-full text-left flex items-center gap-2 ${buttonClass}`} onClick={toggleDropdown}>
            {!isCollapsed && title}
        </button>
        {isOpen && (
            <div className={`flex flex-col ml-4 mt-2 gap-4 justify-between ${dropdownClass}`}>
                {items.map((item, index) => (
                    <a
                        href={item.to}
                        key={index}
                        className={`w-full text-left flex items-center gap-2 ${activeLink === item.content ? 'bg-gray-600' : ''}`}
                        onClick={() => handleContentChange(item.content)}
                    >
                        {item.icon}
                        {!isCollapsed && item.label}
                    </a>
                ))}
            </div>
        )}
    </div>
);

export default Dropdown;
