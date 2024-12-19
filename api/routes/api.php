<?php

use App\Http\Controllers\BooksController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/admin', function (Request $request) {
    $admin = $request->user();
    return ["admin" => $admin];
});


Route::middleware(['auth:sanctum'])->group(function () {
    // the Books
    Route::post('/admin/addbook', [BooksController::class, 'store']);
    Route::put('/admin/editbook/{id}', [BooksController::class, 'update']);
    Route::delete('/admin/deletebook/{id}', [BooksController::class, 'destroy']);
    // the Genres
    Route::post('/admin/addgenre', [GenreController::class, 'store']);
    Route::put('/admin/editgenre/{id}', [GenreController::class, 'update']);
    Route::delete('/admin/deletegenre/{id}', [GenreController::class, 'destroy']);
    // the Notifications
    Route::get('/admin/dashboard', [DashboardController::class, 'showDashboard']);
    Route::get('admin/notifications', [NotificationController::class, 'index']);
    Route::post('admin/notifications/{notification}', [NotificationController::class, 'markAsRead']);
});




Route::get("/genres", [GenreController::class, "index"]);
Route::get("/books", [BooksController::class, "index"]);
Route::post('/orders', [OrderController::class, 'store']);