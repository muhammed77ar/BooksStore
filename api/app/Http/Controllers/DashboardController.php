<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showDashboard()
    {
        $admin = auth()->user(); // Get the authenticated admin
        $notifications = $admin->unreadNotifications; // Fetch unread notifications

        return response()->json([
            'notifications' => $notifications,
        ]);
    }
}
