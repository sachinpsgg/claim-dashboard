import React from "react";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar--navbar-container">
                    <h1
                        className="navbar--navbar-container--navbar-brand"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        Dashboard
                    </h1>
                    <ul className="navbar-user">
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}

