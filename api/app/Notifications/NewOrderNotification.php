<?php

namespace App\Notifications;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewOrderNotification extends Notification
{
    use Queueable;

    public $order;
    /**
     * Create a new notification instance.
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toDatabase($notifiable)
    {
        // Get the order details (customer name, email, etc.)
        $orderDetails = [
            'full_name' => $this->order->full_name,
            'email' => $this->order->email,
            'phone_number' => $this->order->phone_number,
            'shipping_address' => $this->order->shipping_address,
            'cin' => $this->order->cin,
        ];

        // Get the list of items in the order
        $items = $this->order->items->map(function ($item) {
            return [
                'book_title' => $item->book_title,
                'quantity' => $item->quantity,
                'price' => $item->price,
                'image_url' => $item->image_url,
            ];
        });


        return [
            'message' => 'A new order has been placed.',
            'order_id' => $this->order->id,
            'order_details' => $orderDetails, // Include order details
            'items' => $items, // Include items in the order
        ];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray($notifiable)
    {
        // Same structure for array representation
        $orderDetails = [
            'full_name' => $this->order->full_name,
            'email' => $this->order->email,
            'phone_number' => $this->order->phone_number,
            'shipping_address' => $this->order->shipping_address,
            'cin' => $this->order->cin,
        ];

        $items = $this->order->items->map(function ($item) {
            return [
                'book_title' => $item->book_title,
                'quantity' => $item->quantity,
                'price' => $item->price,
                'image_url' => $item->image_url,
            ];
        });


        return [
            'message' => 'A new order has been placed.',
            'order_id' => $this->order->id,
            'order_details' => $orderDetails, // Include order details
            'items' => $items, // Include items in the order
        ];

    }
}
