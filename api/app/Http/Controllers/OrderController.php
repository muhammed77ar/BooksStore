<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Order;
use App\Models\OrderItem;
use App\Notifications\NewOrderNotification;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'shipping_address' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone_number' => 'required|string|max:20',
            'cin' => 'required|string|max:20',
            'items' => 'required|array',
            'items.*.book_title' => 'required|string|max:255',
            'items.*.book_genre' => 'required|string|max:255',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric|min:0',
            'items.*.image_url' => 'required|string|max:255',
        ]);

        $order = Order::create([
            'full_name' => $validatedData['full_name'],
            'shipping_address' => $validatedData['shipping_address'],
            'email' => $validatedData['email'],
            'phone_number' => $validatedData['phone_number'],
            'cin' => $validatedData['cin'],
        ]);

        foreach ($validatedData['items'] as $item) {
            OrderItem::create([
                'order_id' => $order->id,
                'book_title' => $item['book_title'],
                'book_genre' => $item['book_genre'],
                'quantity' => $item['quantity'],
                'price' => $item['price'],
                'image_url' => $item['image_url'],
            ]);
        }

        // Load the related OrderItems into the order (for notification)
        $order->load('items');

        // Notify the authenticated admin
        $admin = Admin::where('email', 'adminbooks@gmail.com')->first(); // Replace this with actual admin logic

        if ($admin) {
            $admin->notify(new NewOrderNotification($order)); // Send notification to admin
        }

        return response()->json([
            'message' => 'Order placed successfully',
            'order' => $order->load('items'),
        ], 201);
    }
}
