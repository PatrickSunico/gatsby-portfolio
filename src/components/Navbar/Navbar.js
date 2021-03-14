import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./NavbarStyle.scss"

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

      {/*  Mobile Menu */}
      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Portfolio
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </Link>
        </div>
      </div> */}
    </div>
  </nav>
  // <nav className="navbar-style z-10 fixed w-full">
  //   <div className="w-full sm:max-w-1xl md:max-w-1xl lg:max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
  //     <div className="relative flex items-center justify-between h-16">
  //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
  //         <button
  //           type="button"
  //           className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  //           aria-controls="mobile-menu"
  //           aria-expanded="false"
  //         >
  //           <span className="sr-only">Open main menu</span>
  //         </button>
  //       </div>

  //       <div className="flex-1 flex justify-center items-stretch">
  //         {/* Logo */}
  //         <div className="flex-1 flex-shrink-0 flex items-center">
  //           <h1 className="text-3xl logo">PS</h1>
  //         </div>

  //         {/* Links */}
  //         <div className="hidden sm:block sm:ml-6 items-end">
  //           <div className="flex space-x-10 xs:space-x-16 sm:space-x-16 md:space-x-18 lg:space-x-28">
  //             <Link
  //               to="/"
  //               className="text-white	px-3 py-2 rounded-md text-sm font-medium"
  //             >
  //               About
  //             </Link>
  //             <Link
  //               to="/"
  //               className="text-white px-3 py-2 rounded-md text-sm font-medium"
  //             >
  //               Portfolio
  //             </Link>
  //             <Link
  //               to="/"
  //               className="text-white px-3 py-2 rounded-md text-sm font-medium"
  //             >
  //               Contact
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   {/* Mobile Menu */}

  // <div className="sm:hidden" id="mobile-menu">
  //   <div className="px-2 pt-2 pb-3 space-y-1">
  //     <Link
  //       to="/"
  //       className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
  //     >
  //       About
  //     </Link>
  //     <Link
  //       to="/"
  //       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //     >
  //       Portfolio
  //     </Link>
  //     <Link
  //       to="/"
  //       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //     >
  //       Contact
  //     </Link>
  //     <Link
  //       to="/"
  //       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //     >
  //       Calendar
  //     </Link>
  //   </div>
  //   </div>
  // </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
