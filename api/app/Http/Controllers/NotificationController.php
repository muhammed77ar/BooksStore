<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    // Fetch all notifications for the authenticated user
    public function index(Request $request)
    {
        return response()->json([
            'notifications' => $request->user()->unreadNotifications,
        ]);
    }

    // Mark a notification as read
    public function markAsRead(Request $request, $id)
    {
        $notification = $request->user()->notifications()->findOrFail($id);
        $notification->markAsRead();

        return response()->json(['message' => 'Notification marked as read!']);
    }
}
