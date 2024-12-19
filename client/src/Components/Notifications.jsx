import { useEffect, useState } from 'react';
import axiosClient from '../axios';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch notifications from the backend
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axiosClient.get('/api/admin/notifications');
                setNotifications(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch notifications', error);
            }
        };

        fetchNotifications();
    }, []);

    const markAsRead = async (notificationId) => {
        try {
            const response = await axiosClient.post(`/api/admin/notifications/${notificationId}/read`);
            setNotifications(notifications.filter(notification => notification.id !== notificationId)); // Remove the notification from the list
        } catch (error) {
            console.error('Failed to mark notification as read', error);
        }
    };

    if (loading) {
        return <div>Loading notifications...</div>;
    }

    return (
        <div>
            <h2>Notifications</h2>
            {notifications.length === 0 ? (
                <p>No new notifications.</p>
            ) : (
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification.id}>
                            <div>
                                <p>{notification.data.message}</p>
                                <p>Order ID: {notification.data.order_id}</p>
                                <button onClick={() => markAsRead(notification.id)}>Mark as read</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Notifications;
