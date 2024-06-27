import React, { useState } from 'react';
import { FaBars, FaCcAmazonPay, FaFileUpload, FaSearch, FaUsersCog, FaWpforms } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiBoxList, CiCirclePlus, CiHome, CiViewColumn } from 'react-icons/ci';
import { TbReportSearch } from 'react-icons/tb';
import { IoIosPerson, IoIosSettings } from 'react-icons/io';

const Dashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeContent, setActiveContent] = useState('Home');
    const [isClaimDropdownOpen, setIsClaimDropdownOpen] = useState(false);
    const [isManageAccountDropdownOpen, setIsManageAccountDropdownOpen] = useState(false);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    const handleDropdownToggle = (dropdown) => {
        if (dropdown === 'claim') {
            setIsClaimDropdownOpen(!isClaimDropdownOpen);
            setIsManageAccountDropdownOpen(false);
        } else if (dropdown === 'manageAccount') {
            setIsManageAccountDropdownOpen(!isManageAccountDropdownOpen);
            setIsClaimDropdownOpen(false);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Side Panel */}
            <div className={`bg-gray-800 text-white ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
                <div className="p-4 flex justify-between items-center">
                    <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
                </div>
                <div className="p-4">
                    <div className="mb-4">
                        <button className="w-full text-left flex items-center gap-2" onClick={() => handleDropdownToggle('claim')}>
                            <CiHome />
                            {!isCollapsed && 'Claim Menu'}
                        </button>
                        {isClaimDropdownOpen && (
                            <div className="ml-4 mt-2">
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 1')}
                                >
                                    <CiHome />
                                    {!isCollapsed && 'Summery Page'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 2')}
                                >
                                    <FaFileUpload />
                                    {!isCollapsed && 'Upload Files'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 2')}
                                >
                                    <CiBoxList />
                                    {!isCollapsed && 'Manage Claims'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 2')}
                                >
                                    <CiViewColumn />
                                    {!isCollapsed && 'View ERA'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 2')}
                                >
                                    <TbReportSearch />
                                    {!isCollapsed && 'Reporting'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 2')}
                                >
                                    <IoIosPerson />
                                    {!isCollapsed && 'Eligibility'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 2')}
                                >
                                    <FaSearch />
                                    {!isCollapsed && 'Search'}
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <button className="w-full text-left flex items-center gap-2" onClick={() => handleDropdownToggle('manageAccount')}>
                            <FaUsersCog />
                            {!isCollapsed && 'Manage Account'}
                        </button>
                        {isManageAccountDropdownOpen && (
                            <div className="ml-4 mt-2">
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 3')}
                                >
                                    <CiCirclePlus />
                                    {!isCollapsed && 'Support Tickets'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 3')}
                                >
                                    <FaUsersCog />
                                    {!isCollapsed && 'Manage Users'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 3')}
                                >
                                    <FaCcAmazonPay />
                                    {!isCollapsed && 'View/Pay Invoices'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 3')}
                                >
                                    <FaWpforms />
                                    {!isCollapsed && 'Prov Enrollment'}
                                </button>
                                <button
                                    className="w-full text-left flex items-center gap-2"
                                    onClick={() => handleContentChange('Option 3')}
                                >
                                    <IoIosSettings />
                                    {!isCollapsed && 'Settings'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Right Side Panel */}
            <div className="flex-1 p-6 bg-gray-100">
                <div className="flex justify-start">
                    <button className="p-2 bg-gray-800 text-white rounded" onClick={handleToggle}>
                        {isCollapsed ? <FaBars /> : <BsThreeDotsVertical />}
                    </button>
                </div>
                <div className="mt-4">
                    {activeContent === 'Home' && <div>Home Content</div>}
                    {activeContent === 'Settings' && <div>Settings Content</div>}
                    {activeContent === 'Option 1' && <div>Option 1 Content</div>}
                    {activeContent === 'Option 2' && <div>Option 2 Content</div>}
                    {activeContent === 'Option 3' && <div>Option 3 Content</div>}
                    {activeContent === 'Option 4' && <div>Option 4 Content</div>}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
