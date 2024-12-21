import React, { useEffect, useState } from 'react'
import axiosClient from '../axios';
import { FaBookOpen } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { markAsRead } from '../Redux/NotificationsSlice';

export default function NotificationsDropdDown() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const FetchNotificatiosn = async () => {
        try {
            const response = await axiosClient.get("/api/admin/notifications");
            setNotifications(response?.data?.notifications || []); // Store notifications in state
            dispatch(setNotifications(response?.data?.notifications))
            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error("Error fetching notifications:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        FetchNotificatiosn()
    }, []);


    // Mark a notification as read
    const handleMarkAsRead = (id) => {
        axiosClient
            .post(`api/admin/notifications/${id}`)
            .then(() => {
                // Remove the notification from the list
                setNotifications((prev) =>
                    prev.filter((notification) => notification.id !== id)
                );
                location.reload();
            })
            .catch((error) => {
                console.error("Error marking notification as read:", error);
            });
    };
    return (
        <div className="absolute right-2 top-full mt-1 z-20 bg-slate-600 divide-y divide-gray-100 rounded-lg shadow w-[300px] max-h-[400px] overflow-y-scroll">
    <div className="bg-gray-800 px-3 py-4 rounded-xl">
        <h3 className="text-white text-2xl font-bold mb-4">Unread Notifications</h3>
        {loading ? (
            <p className="text-white">Loading notifications...</p>
        ) : notifications.length === 0 ? (
            <p className="text-white">No new notifications.</p>
        ) : (
            <div>
                {notifications.map((notification) => (
                    <div key={notification.data.id} className=' flex flex-col'>
                        <p className=' text-white flex items-center gap-1 mt-3'><FaDotCircle /> New order from {notification.data.order_details.full_name}:</p>
                        <ul className=' text-white'>
                            {notification.data.items.map((item, key) => (
                                <li className=' flex items-center gap-2 ml-2 mt-2' key={key}>
                                    <div className='w-[7px] h-[7px] bg-white rounded-full' />
                                    <img className=' w-[30px]' src={`${import.meta.env.VITE_API_BASE_URL}${item.image_url}`} alt="" />
                                    <span>{item.book_title}</span>
                                </li>
                            ))}
                            <li className=' ml-2 mt-2'>
                            <button className=' flex gap-1 items-center border-2 p-1 rounded-lg' onClick={() => handleMarkAsRead(notification.id)}><FaCircleCheck/> Read</button>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        )}
    </div>
</div>
    )
}
