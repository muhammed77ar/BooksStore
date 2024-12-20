import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const MOBILE_NAV_ITEMS = [
    { id: 0, navTitle: "Home", path: "/" },
    { id: 1, navTitle: "login", path: "/login" },
    // { id: 2, navTitle: "signup", path: "/signup" },
    { id: 3, navTitle: "categories", path: "/categories" },
    {id: 4, navTitle:"Books", path:"/books"}
];

export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const books = useSelector((state) => state.cart)
    const toggleCart = () => {
        setOpen(!open);
    };

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
    return (
        <div className="overflow-hidden bg-white bg-cover bg-top">
            <motion.nav initial="closed" animate={mobileNavOpen ? "opened" : "closed"} className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-9 py-3 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-none"}`}>
                <div className="overflow-hidden">
                    <motion.h variants={hideNavItemsVariant} className="capitalize text-xl font-bold">
                        <Link to={"/"}>Thoughts</Link>
                    </motion.h>
                </div>
                <div className="overflow-hidden">
                    <motion.div variants={hideNavItemsVariant} className="uppercase text-xs flex items-center gap-10">
                        <div className=' relative' onClick={toggleCart}>
                            <FaShoppingCart className='cart text-3xl cursor-pointer' />
                            <span className=" absolute -top-0.5 -right-1 bg-red-500 text-white px-1 rounded-full">{books.length}</span>
                        </div>
                        <IoMenu onClick={() => setMobileNavOpen(true)} className="text-4xl cursor-pointer bg-black p-0 m-0 rounded-full text-white" />
                    </motion.div>
                </div>
                {open && <Cart isOpen={open} onClose={toggleCart} />}
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
