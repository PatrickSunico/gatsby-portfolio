import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Navbar = ({ siteTitle }) => (
    <nav className="navbar navbar-style z-10 fixed w-full">
        <div className="navbar__container">
            <div className="flex items-center justify-between py-3">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-3xl logo">PS</h1>
                </div>

                {/* Menu */}
                <div className="items-end">
                    <div className="flex space-x-10 xs:space-x-16 sm:space-x-16 md:space-x-18 lg:space-x-28">
                        <Link
                            to="/"
                            className="text-white	px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </Link>
                        <Link
                            to="/"
                            className="text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/"
                            className="text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

Navbar.propTypes = {
    siteTitle: PropTypes.string
};

Navbar.defaultProps = {
    siteTitle: ``
};

export default Navbar;
