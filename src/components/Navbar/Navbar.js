import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Navbar = ({ siteTitle }) => (
    <nav className="navbar navbar-style z-10 fixed w-full">
        <div className="l-container">
            <div className="flex items-center justify-between py-3 navbar__inner-container">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <h3 className="text-3xl navbar__logo">PS</h3>

                    {/* <h1 className="text-3xl navbar__logo">PS</h1> */}
                </div>

                {/* Menu */}
                <div className="items-end">
                    <div className="flex space-x-10 xs:space-x-16 sm:space-x-10 md:space-x-10 lg:space-x-20 xl:space-x-28">
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
