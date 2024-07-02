// src/Dashboard.js
import React, { useState } from 'react';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/NavBar";
import {Outlet} from "react-router-dom";

const Dashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeContent, setActiveContent] = useState('Home');

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (
        <>
            <Sidebar
                isCollapsed={isCollapsed}
                handleContentChange={handleContentChange}
                sidebarClass="custom-sidebar-class"
                buttonClass="custom-button-class"
                dropdownClass="custom-dropdown-class"
            />
            <div className="right-panel">
                <Navbar/>
                <div className="right-panel--outlet">
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
