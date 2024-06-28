import React from 'react';
import { FaBars,} from 'react-icons/fa';
import {BsThreeDotsVertical} from "react-icons/bs";
import {Outlet} from "react-router-dom";

const RightPanel = ({ isCollapsed, handleToggle, children, rightPanelClass, toggleButtonClass }) => {
    return (
        <div className={`flex-1 p-6 bg-gray-100 ${rightPanelClass}`}>
            <div className="flex justify-start">
                <button className={`p-2 bg-gray-800 text-white rounded ${toggleButtonClass}`} onClick={handleToggle}>
                    {isCollapsed ? <FaBars /> : <BsThreeDotsVertical />}
                </button>
            </div>
            <div className="">
                <Outlet/>
                {/*{children}*/}
            </div>
        </div>
    );
};

export default RightPanel;
