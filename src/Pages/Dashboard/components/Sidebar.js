/*eslint-disable*/
import React from "react";
import {NavLink} from "react-router-dom";
import { CgHome } from "react-icons/cg";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-black m-2 py-3 px-6")}
          >
            <i className="fas fa-bars">|||</i>
          </button>
          {/* Brand */}
          <NavLink
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Claim.MD
          </NavLink>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">
              {/* <UserDropdown /> */}
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <NavLink
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </NavLink>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center flex-1">
                <NavLink
                    className={({ isActive }) =>
                        `text-xs uppercase py-3 font-bold block ${
                            isActive
                                ? 'text-lightBlue-500 hover:text-sky'
                                : 'text-blueGray-700 hover:text-sky-500'
                        }`
                    }
                    to="/dashboard/summery"
                >
                  <CgHome className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/summery") !== -1
                          ? "opacity-75"
                          : "text-red-300")
                  }/>
                  Summery Page
                </NavLink>
              </li>
              <li className="items-center">
                <NavLink
                    className={({ isActive }) =>
                        `text-xs uppercase py-3 font-bold block ${
                            isActive
                                ? 'text-lightBlue-500 hover:text-sky'
                                : 'text-blueGray-700 hover:text-sky-500'
                        }`
                    }
                    to="/dashboard/upload"
                >
                  <i
                      className={
                          "fas fa-tv mr-2 text-sm " +
                          (window.location.href.indexOf("/dashboard/upload") !== -1
                              ? "opacity-75"
                              : "text-red-300")
                      }
                  ></i>{" "}
                  Upload Files
                </NavLink>
              </li>
              <li className="items-center">
                <NavLink
                    className={({ isActive }) =>
                        `text-xs uppercase py-3 font-bold block ${
                            isActive
                                ? 'text-lightBlue-500 hover:text-sky'
                                : 'text-blueGray-700 hover:text-sky-500'
                        }`
                    }
                    to="/dashboard/manage-claims"
                >
                  <i
                      className={
                          "fas fa-tv mr-2 text-sm " +
                          (window.location.href.indexOf("/dashboard/manage-claims") !== -1
                              ? "opacity-75"
                              : "text-red-300")
                      }
                  ></i>{" "}
                  Manage Claims
                </NavLink>
              </li>
              <li className="items-center">
                <NavLink
                    className={({ isActive }) =>
                        `text-xs uppercase py-3 font-bold block ${
                            isActive
                                ? 'text-lightBlue-500 hover:text-sky'
                                : 'text-blueGray-700 hover:text-sky-500'
                        }`
                    }
                    to="/dashboard/view-era"
                >
                  <i
                      className={
                          "fas fa-tv mr-2 text-sm " +
                          (window.location.href.indexOf("/dashboard/view-era") !== -1
                              ? "opacity-75"
                              : "text-red-300")
                      }
                  ></i>{" "}
                  View Era
                </NavLink>
              </li>
              <li className="items-center">
                <NavLink
                    className={({ isActive }) =>
                        `text-xs uppercase py-3 font-bold block ${
                            isActive
                                ? 'text-lightBlue-500 hover:text-sky'
                                : 'text-blueGray-700 hover:text-sky-500'
                        }`
                    }
                    to="/dashboard/reporting"
                >
                  <i
                      className={
                          "fas fa-tv mr-2 text-sm " +
                          (window.location.href.indexOf("/dashboard/reporting") !== -1
                              ? "opacity-75"
                              : "text-red-300")
                      }
                  ></i>{" "}
                  Reporting
                </NavLink>
              </li>
              <li className="items-center">
                <NavLink
                    className={({ isActive }) =>
                        `text-xs uppercase py-3 font-bold block ${
                            isActive
                                ? 'text-lightBlue-500 hover:text-sky'
                                : 'text-blueGray-700 hover:text-sky-500'
                        }`
                    }
                    to="/dashboard/eligibility"
                >
                  <i
                      className={
                          "fas fa-tv mr-2 text-sm " +
                          (window.location.href.indexOf("/dashboard/eligibility") !== -1
                              ? "opacity-75"
                              : "text-red-300")
                      }
                  ></i>{" "}
                  Eligibility
                </NavLink>
              </li>
              <li className="items-center">
                <NavLink
                    className={({ isActive }) =>
                        `text-xs uppercase py-3 font-bold block ${
                            isActive
                                ? 'text-lightBlue-500 hover:text-sky'
                                : 'text-blueGray-700 hover:text-sky-500'
                        }`
                    }
                    to="/dashboard/search"
                >
                  <i
                      className={
                          "fas fa-tv mr-2 text-sm " +
                          (window.location.href.indexOf("/dashboard/search") !== -1
                              ? "opacity-75"
                              : "text-red-300")
                      }
                  ></i>{" "}
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


