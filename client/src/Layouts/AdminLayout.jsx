import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../axios"
import { setUserInfo } from "../Redux/AuthSlice";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GoMoveToEnd } from "react-icons/go";
import { GoMoveToStart } from "react-icons/go";
import { setBooks } from "../Redux/BooksSlice";
import { setGenres } from "../Redux/GenresSlice";
import { MdCategory } from "react-icons/md";
import { setNotifications } from "../Redux/NotificationsSlice";

export default function AdminLayout() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch()


    const GetUserData = async () => {
        try {
            const response = await axiosClient.get("api/admin");
            if (response && response?.data && response?.data?.admin) {
                dispatch(setUserInfo(response?.data?.admin))
            }

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    useEffect(() => {
        if (isAuthenticated) {
            GetUserData();
        }
    }, [isAuthenticated]);



    const FetchGenres = async () => {
        try {
          const response = await axiosClient.get("api/genres");
          if (response && response?.data) {
            dispatch(setGenres(response?.data))
          }
    
        } catch (error) {
          console.error('Error fetching Genres data:', error);
        }
      };
    
      useEffect(() => {
        FetchGenres();
      }, []);
    
      const FetchBooks = async () => {
        try {
          const response = await axiosClient.get("/api/books");
          if (response && response?.data && response?.data?.books) {
            dispatch(setBooks(response?.data?.books));
          }
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        FetchBooks();
      }, []);


      const FetchNotifications = async () => {
        try {
            const response = await axiosClient.get("/api/admin/notifications");
            dispatch(setNotifications(response?.data?.notifications))
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    }

    useEffect(() => {
        FetchNotifications()
    }, []);


    return (
        <>
        <AdminNavbar />
        <div className=" relative flex h-full overflow-hidden">
            {/* Sidebar */}
            <div
                className={`fixed top-[60px] left-0 z-40 w-64 bg-gray-800 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                       <Link to={"admin/dashboard"}>
                            <li className=' flex items-center px-3 hover:bg-gray-700'>
                                <MdDashboard />
                                <p className="block p-2 rounded">Dashboard</p>
                            </li>
                        </Link>
                        <Link to={"admin/addgenres"}>
                            <li className=' flex items-center px-3 hover:bg-gray-700'>
                                <MdCategory />
                                <p className="block p-2 rounded">Genres</p>
                            </li>
                        </Link>
                        <Link to={"admin/addbooks"} >
                            <li className=' flex items-center px-3 hover:bg-gray-700'>
                                <FaBookOpen />
                                <p className="block p-2 rounded">Add Book</p>
                            </li>
                        </Link>

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
            <div className="flex-1 h-auto flex flex-col overflow-y-auto">
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
                    <Outlet />
                </div>
            </div>
        </div>
        </>
    )
}
