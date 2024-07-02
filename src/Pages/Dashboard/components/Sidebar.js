
/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineManageHistory } from "react-icons/md";
import { LuView } from "react-icons/lu";
import { FaChartPie } from "react-icons/fa";
import {FaPersonCircleCheck, FaS} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";
import { FaUsersGear } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FiSettings } from "react-icons/fi";
import { FcCollect } from "react-icons/fc";
import { FaBars } from "react-icons/fa6";
import Links from "./Links";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("");
  return (
      <>
        <nav className="sidebar">
          <div className="sidebar--sidebar-content">
            <NavLink className="sidebar--sidebar-content--brand" to="/">
              Claim.MD
            </NavLink>
            <hr className="sidebar--sidebar-content--divider"/>
            <div className="sidebar--sidebar-content--collapse">
              <h6 className="sidebar--sidebar-content--collapse--menu-heading">Claim Menu</h6>
              <ul className="sidebar--sidebar-content--collapse--menu-list">
                <li>
                  <Links to="/dashboard/summery"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Summery Page"
                         Icon={CgHome}
                  />
                </li>
                <li>
                  <Links to="/dashboard/upload"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Upload Files"
                         Icon={IoCloudUploadOutline}
                  />
                </li>
                <li>
                  <Links to="/dashboard/manage-claims"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Manage Claims"
                         Icon={MdOutlineManageHistory}
                  />
                </li>
                <li>
                  <Links to="/dashboard/view-era"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="View ERA"
                         Icon={LuView}
                  />
                </li>
                <li>
                  <Links to="/dashboard/reporting"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Reproting"
                         Icon={FaChartPie}
                  />
                </li>
                <li>
                  <Links to="/dashboard/eligibility"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Eligibility"
                         Icon={FaPersonCircleCheck}
                  />
                </li>
                <li>
                  <Links to="/dashboard/search"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Search"
                         Icon={FaSearch}
                  />
                </li>
              </ul>
              <hr className="sidebar--sidebar-content--collapse--divider"/>
              <h6 className="sidebar--sidebar-content--collapse--menu-heading">Manage Account</h6>
              <ul className="sidebar--sidebar-content--collapse--menu-list">
                <li>
                  <Links to="/dashboard/support-tickets"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Support Tickets"
                         Icon={FcOnlineSupport}
                  />
                </li>
                <li>
                  <Links to="/dashboard/manage-users"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Manage Users"
                         Icon={FaUsersGear}
                  />
                </li>
                <li>
                  <Links to="/dashboard/manage-users"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="View/Pay Invoices"
                         Icon={LiaFileInvoiceSolid}
                  />
                </li>
                <li>
                  <Links to="/dashboard/manage-users"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Prov Enrollment"
                         Icon={FcCollect}
                  />
                </li>
                <li>
                  <Links to="/dashboard/manage-users"
                         className="sidebar--sidebar-content--collapse--menu-list--menu-item"
                         title="Settings"
                         Icon={FiSettings}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  );
}
