import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="shadow fixed w-full z-50 top-0">
      <nav className="bg-white border-gray-200 ">
        <div className="flex py-2 px-14 flex-wrap justify-between items-center  uppercase">
          <Link to="/" className="flex items-center">
            <h2 className="text-[2vw]  font-bold text-[#fd8500]">
              Basic<span className="text-black">Store</span>
              <span className="text-[#fd8500]">.</span>
            </h2>
          </Link>
          
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#fd8500]" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd8500] lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#fd8500]" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd8500] lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#fd8500]" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd8500] lg:p-0`
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#fd8500]" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd8500] lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

         

          <div className="flex items-center lg:order-2 gap-[5vw]">
          <FaSearch className="text-[#fd8500] text-lg cursor-pointer hover:text-black" />
          <Link to="/cart" className="flex items-center lg:order-3">
            <FaShoppingCart className="text-[#fd8500] text-lg cursor-pointer hover:text-black"/>
          </Link>
          </div>
          
        </div>
      </nav>
    </header>
  );
}
