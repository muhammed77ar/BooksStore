<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    // Fetch all notifications for the authenticated user
    public function index(Request $request)
    {
        // Fetch unread notifications for the authenticated user
        $notifications = $request->user()->unreadNotifications;
        
        return response()->json([
            'notifications' => $notifications,
        ]);
    }

    // Mark a notification as read
    public function markAsRead(Request $request, $notificationId)
    {
        $notification = $request->user()->notifications()->findOrFail($notificationId);
        
        $notification->markAsRead();  // Mark the notification as read
        
        return response()->json([
            'message' => 'Notification marked as read',
        ]);
    }
}
