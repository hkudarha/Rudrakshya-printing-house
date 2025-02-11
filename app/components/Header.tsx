import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";


export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl uppercase">
                    <Link to="/" className="flex items-center">
                        <h2 className="text-[2vw] mt-4 mb-4 font-bold text-[#fd8500]">
                            Basic<span className="text-black">Store</span><span className="text-[#fd8500]">.</span>
                        </h2>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <FaSearch className="text-[#fd8500] text-lg cursor-pointer hover:text-black" />
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#fd8500]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd8500] lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#fd8500]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd8500] lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shop"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#fd8500]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd8500] lg:p-0`
                                    }
                                >
                                    Shop
                                </NavLink>
                            </li>
                            {/* Pages Dropdown */}
                            <li className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b uppercase border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd8500] lg:p-0 focus:outline-none"
                                >
                                    Pages <span className="text-sm">▼</span>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-36">
                                        <li>
                                            <NavLink to="/card" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                Card
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/checkout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                Checkout
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                Blog
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#fd8500]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd8500] lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
