import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GoMoveToEnd } from "react-icons/go";
import { GoMoveToStart } from "react-icons/go";

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-800 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:relative md:translate-x-0`}
            >
                <div className="mt-[60px]">
                    <h2 className="text-lg font-semibold p-4 flex items-center">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 text-white bg-gray-800 rounded-md md:hidden"
                        >
                            <GoMoveToStart className=' text-2xl font-extrabold' />
                        </button>Sidebar Menu</h2>
                    <ul className="mt-4 space-y-2">
                        <li className=' flex items-center px-3 hover:bg-gray-700'>
                            <FaHome />
                            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                                Home Page
                            </a>
                        </li>
                        <li className=' flex items-center px-3 hover:bg-gray-700'>
                            <MdDashboard />
                            <a href="#" className="block p-2 rounded">
                                Dashboard
                            </a>
                        </li>
                        <li className=' flex items-center px-3 hover:bg-gray-700'>
                            <FaBookOpen />
                            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                                Books
                            </a>
                        </li>
                        <li className=' flex items-center px-3 hover:bg-gray-700'>
                            <FaBagShopping />
                            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                                Orders
                            </a>
                        </li>
                        <li className=' flex items-center px-3 hover:bg-gray-700'>
                            <IoMdSettings />
                            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Menu Button for Small Screens */}
                <div className="p-4 md:hidden mt-[60px]">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 text-white flex items-center gap-2 bg-gray-800 rounded-md"
                    >
                        <GoMoveToEnd /> Open Menu
                    </button>
                </div>

                <div className="p-4 mt-[60px]">
                    <h1 className="text-2xl font-bold">Main Content</h1>
                    <p className="mt-2">
                        This is the main content area. Resize your screen to see the sidebar behavior.
                    </p>
                </div>
            </div>
        </div>
    );
}
