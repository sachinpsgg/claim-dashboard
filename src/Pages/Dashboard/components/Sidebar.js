import React, { useState } from 'react';
import { CiHome, CiBoxList, CiViewColumn, CiCirclePlus } from 'react-icons/ci';
import { FaFileUpload, FaUsersCog, FaCcAmazonPay, FaWpforms, FaSearch } from 'react-icons/fa';
import { TbReportSearch } from 'react-icons/tb';
import { IoIosPerson, IoIosSettings } from 'react-icons/io';
import Dropdown from "./DropDown";

const Sidebar = ({ isCollapsed, handleContentChange, sidebarClass, buttonClass, dropdownClass }) => {
    const [isClaimDropdownOpen, setIsClaimDropdownOpen] = useState(true);
    const [isManageAccountDropdownOpen, setIsManageAccountDropdownOpen] = useState(true);
    const [activeLink, setActiveLink] = useState('Summery Page');

    const toggleDropdown = (dropdown) => {
        if (dropdown === 'claim') {
            setIsClaimDropdownOpen(!isClaimDropdownOpen);
        } else if (dropdown === 'manageAccount') {
            setIsManageAccountDropdownOpen(!isManageAccountDropdownOpen);
        }
    };

    const handleLinkClick = (content) => {
        setActiveLink(content);
        handleContentChange(content);
    };

    return (
        <div className={`bg-gray-800 text-white ${isCollapsed ? 'w-16' : 'w-60'} transition-all duration-700 ${sidebarClass}`}>
            <div className="p-4">
                <Dropdown
                    title="Claim Menu"
                    isOpen={isClaimDropdownOpen}
                    toggleDropdown={() => toggleDropdown('claim')}
                    isCollapsed={isCollapsed}
                    items={[
                        { icon: <CiHome />, label: 'Summery Page', content: 'Summery Page' , to: '/dashboard' },
                        { icon: <FaFileUpload />, label: 'Upload Files', content: 'Upload Files' ,  to: '/dashboard/upload'  },
                        { icon: <CiBoxList />, label: 'Manage Claims', content: 'Manage Claims' ,  to: '/dashboard/manage-claims'  },
                        { icon: <CiViewColumn />, label: 'View ERA', content: 'View ERA' },
                        { icon: <TbReportSearch />, label: 'Reporting', content: 'Reporting' },
                        { icon: <IoIosPerson />, label: 'Eligibility', content: 'Eligibility' },
                        { icon: <FaSearch />, label: 'Search', content: 'Search' }
                    ]}
                    handleContentChange={handleLinkClick}
                    buttonClass={buttonClass}
                    dropdownClass={dropdownClass}
                    activeLink={activeLink}
                />
                <Dropdown
                    title="Manage Account"
                    isOpen={isManageAccountDropdownOpen}
                    toggleDropdown={() => toggleDropdown('manageAccount')}
                    isCollapsed={isCollapsed}
                    items={[
                        { icon: <CiCirclePlus />, label: 'Support Tickets', content: 'Support Tickets' },
                        { icon: <FaUsersCog />, label: 'Manage Users', content: 'Manage Users' },
                        { icon: <FaCcAmazonPay />, label: 'View/Pay Invoices', content: 'View/Pay Invoices' },
                        { icon: <FaWpforms />, label: 'Prov Enrollment', content: 'Prov Enrollment' },
                        { icon: <IoIosSettings />, label: 'Settings', content: 'Settings' }
                    ]}
                    handleContentChange={handleLinkClick}
                    buttonClass={buttonClass}
                    dropdownClass={dropdownClass}
                    activeLink={activeLink}
                />
            </div>
        </div>
    );
};

export default Sidebar;
