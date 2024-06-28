// src/components/TopBar.js
import React, { useState } from 'react';
import { IoIosPerson } from 'react-icons/io';

const TopBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="bg-gray-800 text-white h-10 flex items-center px-4 shadow-md justify-between">
            <div className="flex items-center">
                <span className="text-xl font-semibold ml-2">CLAIM.MD</span>
            </div>
            <div className="relative">
                <button
                    className="flex items-center focus:outline-none"
                    onClick={toggleDropdown}
                >
                    <IoIosPerson className="h-8 w-8 rounded-full" />
                </button>
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopBar;
