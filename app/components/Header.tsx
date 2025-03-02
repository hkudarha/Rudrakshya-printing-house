import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow fixed w-full z-50 top-0 bg-white">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#fd8500]">
              Basic<span className="text-black">Store</span>
              <span className="text-[#fd8500]">.</span>
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <FaSearch className="text-[#fd8500] text-lg cursor-pointer hover:text-black" />
            <Link to="/cart">
              <FaShoppingCart className="text-[#fd8500] text-lg cursor-pointer hover:text-black" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#fd8500] focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="pt-2 pb-4 space-y-1">
            <NavLinks mobile />
          </div>
        </div>
      </nav>
    </header>
  );
}

interface NavLinksProps {
  mobile?: boolean;
}

function NavLinks({ mobile }: NavLinksProps): JSX.Element {
  const commonClasses = ({ isActive }: { isActive: boolean }): string =>
    `${isActive ? "text-[#fd8500]" : "text-gray-700"} 
    ${
      mobile
        ? "block px-3 py-2 text-base font-medium hover:bg-gray-50"
        : "text-sm font-medium hover:text-[#fd8500] transition-colors"
    }`;

  return (
    <>
      <NavLink to="/" className={commonClasses}>
        Home
      </NavLink>
      <NavLink to="/about" className={commonClasses}>
        About
      </NavLink>
      <NavLink to="/shop" className={commonClasses}>
        Shop
      </NavLink>
      <NavLink to="/contact" className={commonClasses}>
        Contact
      </NavLink>
    </>
  );
}
