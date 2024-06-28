// src/Dashboard.js
import React, { useState } from 'react';
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import UploadFiles from "../FileUpload";
import TopBar from "./components/TopBar";

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
        <div className="flex flex-col h-screen">
            <TopBar />
            <div className="flex flex-1">
                <Sidebar
                    isCollapsed={isCollapsed}
                    handleContentChange={handleContentChange}
                    sidebarClass="custom-sidebar-class"
                    buttonClass="custom-button-class"
                    dropdownClass="custom-dropdown-class"
                />
                <RightPanel
                    isCollapsed={isCollapsed}
                    handleToggle={handleToggle}
                    rightPanelClass="custom-right-panel-class"
                    toggleButtonClass="custom-toggle-button-class"
                >
                    {activeContent === 'Home' && <div>Home Content</div>}
                    {activeContent === 'Upload Files' && (
                        <UploadFiles
                            uploadButtonClass="custom-upload-button-class"
                            uploadContainerClass="custom-upload-container-class"
                        />
                    )}
                </RightPanel>
            </div>
        </div>
    );
};

export default Dashboard;
