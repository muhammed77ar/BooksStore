import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../axios";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const MOBILE_NAV_ITEMS = [
    { id: 0, navTitle: "Home", path: "/admin" },
    { id: 0, navTitle: "Dashboard", path: "admin/dashboard" },
    { id: 3, navTitle: "Categories", path: "admin/categories" },
    { id: 4, navTitle: "Books", path: "/admin/books" },
];

export default function AdminNavbar() {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const books = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const toggleCart = () => {
        setOpen(!open);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('#dropdownUserAvatarButton') && !event.target.closest('#dropdownAvatar')) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const hideNavItemsVariant = {
        opened: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
        closed: { opacity: 1, y: "0%", transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" } },
    };

    const mobileMenuVariant = {
        opened: { y: "0%", transition: { delay: 0.15, duration: 1.1, ease: [0.74, 0, 0.19, 1.02] } },
        closed: { y: "-100%", transition: { delay: 0.35, duration: 0.63, ease: [0.74, 0, 0.19, 1.02] } },
    };

    const fadeInVariant = {
        opened: { opacity: 1, transition: { delay: 1.2 } },
        closed: { opacity: 0 },
    };

    const ulVariant = {
        opened: { transition: { delayChildren: 1, staggerChildren: 0.18 } },
        closed: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
    };

    const liVariant = {
        opened: { opacity: 1, y: "0%", transition: { duration: 0.65, ease: "easeOut" } },
        closed: { opacity: 0, y: "100%", transition: { duration: 0.25, ease: "easeInOut" } },
    };

    const logout = async () => {
        const response = await axiosClient.post("/logout");
        dispatch(logout())
        navigate("/login")
    }

    return (
        <div className="overflow-hidden bg-white bg-cover bg-top">
            <motion.nav initial="closed" animate={mobileNavOpen ? "opened" : "closed"} className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-9 py-3 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-none"}`}>
                <div className="overflow-hidden">
                    <motion.h variants={hideNavItemsVariant} className="capitalize text-xl font-bold">
                        Thoughts
                    </motion.h>
                </div>
                <div className="">
                    <motion.div variants={hideNavItemsVariant} className="uppercase text-xs flex items-center gap-10">
                        <div className=' relative' onClick={toggleCart}>
                            <FaShoppingCart className='cart text-3xl cursor-pointer' />
                            <span className=" absolute -top-0.5 -right-1 bg-red-500 text-white px-1 rounded-full">{books.length}</span>
                        </div>
                        <button id="dropdownUserAvatarButton" onClick={() => { toggleDropdown()}} data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-10 h-10 rounded-full object-cover" src={import.meta.env.VITE_API_BASE_URL + user?.profile} alt="user photo" />
                        </button>
                        <IoMenu onClick={() => setMobileNavOpen(true)} className="text-4xl cursor-pointer bg-black p-0 m-0 rounded-full text-white" />
                    </motion.div>
                </div>
                {open && <Cart isOpen={open} onClose={toggleCart} />}
                {/* Dropdown menu */}
                {dropdownOpen && (
                        <div id="dropdownAvatar" className="absolute right-2 top-full mt-1 z-20 bg-slate-600 divide-y divide-gray-100 rounded-lg shadow w-44">
                            <div className="px-4 py-3 text-sm text-white">
                                <div>{user?.name || "WanderMorocco Member"}</div>
                                <div className="font-medium truncate">{user?.email || "name@flowbite.com"}</div>
                            </div>
                            {/* <ul className="text-sm text-white">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-black">Profile</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-black">Settings</a>
                            </li>
                        </ul> */}
                            <div className="cursor-pointer">
                                <Link to={"user/profile"} className="px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black flex justify-center items-center gap-2"><CgProfile className=" text-xl -ml-2" />Profile</Link>
                            </div>
                            <div className="cursor-pointer">
                                <a className=" px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black flex justify-center items-center gap-2"><IoMdSettings className=" text-lg" />Settings</a>
                            </div>
                            <div className="cursor-pointer">
                                <a onClick={logout} className="rounded-b-lg px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black flex justify-center items-center gap-2"><RiLogoutBoxLine className=" text-lg" />Sign out</a>
                            </div>
                        </div>
                    )}
                <motion.div variants={mobileMenuVariant} className="fixed top-0 left-0 h-screen w-full bg-[url('../images/navbarbg.jpg')] bg-no-repeat bg-cover bg-bottom text-black font-charm font-bold z-20">
                    <motion.button variants={fadeInVariant} onClick={() => setMobileNavOpen(false)} className="self-end px-9 py-3 relative text-white uppercase text-xs w-full">
                        <IoClose className=" text-4xl bg-black text-white absolute right-9 top-2 p-0 m-0 rounded-full" />
                    </motion.button>
                    <motion.ul variants={ulVariant} className="mt-10 list-none flex flex-col items-center justify-center">
                        {MOBILE_NAV_ITEMS.map((navItem) => (
                            <motion.li whileTap={{ scale: 0.95 }} key={navItem.id} variants={liVariant} className="my-5">
                                <motion.div onClick={() => setMobileNavOpen(false)} className="text-4xl capitalize text-center cursor-pointer hover:italic"><Link to={navItem.path}>{navItem.navTitle}</Link></motion.div>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.div variants={fadeInVariant} className="mt-20 space-x-10">
                        <h5 className="font-sans font-medium text-center">thoughts@gmail.com</h5>
                    </motion.div>
                </motion.div>
            </motion.nav>
        </div>
    )
}
