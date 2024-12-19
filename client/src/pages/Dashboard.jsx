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

  // Fetch notifications when the component mounts
  useEffect(() => {
    axiosClient
      .get("api/admin/dashboard") // Make sure this matches your backend route
      .then((response) => {
        setNotifications(response.data.notifications); // Store notifications in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className=" flex items-center justify-between px-4">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        {/* Notification Section */}
        <div className="bg-gray-800 px-10 py-4 rounded-xl">
          <h3 className="text-white text-2xl font-bold mb-4">Unread Notifications</h3>
          {loading ? (
            <p className="text-white">Loading notifications...</p>
          ) : notifications.length === 0 ? (
            <p className="text-white">No new notifications.</p>
          ) : (
            <ul className="text-white">
              {notifications.map((notification, index) => (
                <li key={index} className="border-b py-2">
                  <strong>{notification.message}</strong>
                  <div>Order ID: {notification.order_id}</div>
                  <div>Book Title: {notification.book_title}</div>
                  <img src={notification.image_url} alt={notification.book_title} className="w-20 h-20 mt-2" />
                </li>
              ))}
            </ul>
          )}
        </div>
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
