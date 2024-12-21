import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaBook } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import BooksList from "./BooksList";
import axiosClient from "../axios";
import Notifications from "../Components/Notifications";

export default function Dashboard() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const books = useSelector((state) => state.books);
  const genres = useSelector((state) => state.genres);


  return (
    <div className="flex flex-col gap-4">
      <div className=" flex items-center justify-between px-4">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        {/* Notification Section */}
        
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-gray-800 px-16 py-7 flex items-center justify-center gap-5 rounded-xl">
          <div className="flex justify-center items-center bg-white w-[60px] h-[60px] rounded-full">
            <FaBook className="text-4xl text-black" />
          </div>
          <div>
            <span className="text-2xl font-bold text-white">{books.length}</span>
            <p className="text-base text-white">Total Books</p>
          </div>
        </div>
        <div className="bg-gray-800 px-16 py-7 flex items-center justify-center gap-5 rounded-xl">
          <div className="flex justify-center items-center bg-white w-[60px] h-[60px] rounded-full">
            <BiSolidCategoryAlt className="text-4xl text-black" />
          </div>
          <div>
            <span className="text-2xl font-bold text-white">{genres.length}</span>
            <p className="text-base text-white">Total Genres</p>
          </div>
        </div>
        <div className="bg-gray-800 px-16 py-7 flex items-center justify-center gap-5 rounded-xl">
          <div className="flex justify-center items-center bg-white w-[60px] h-[60px] rounded-full">
            <FaBagShopping className="text-4xl text-black" />
          </div>
          <div>
            <span className="text-2xl font-bold text-white">100</span>
            <p className="text-base text-white">Total Orders</p>
          </div>
        </div>
      </div>
      <BooksList books={books} />
    </div>
  );
}
