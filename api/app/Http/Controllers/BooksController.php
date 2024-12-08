<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'genre_id' => 'required|exists:genres,id',
            'price' => 'required|numeric|min:0',
            'publication_year' => 'nullable|integer|min:1500|max:' . date('Y'),
            'publisher' => 'nullable|string|max:255',
            'language' => 'required|string|max:255',
            'pages' => 'nullable|integer|min:1',
            'description' => 'required|string',
            'stock' => 'required|integer|min:0',
            'rating' => 'nullable|numeric|min:0|max:5',
            'cover_type' => 'nullable|string|max:255',
            'image_url' => 'required|image|mimes:jpg,jpeg,png,gif|max:3048',
        ]);



        $request->image_url = '/storage/'.$request->file('image_url')->store('/images/booksImages', 'public');


        $book = Book::create($validatedData);

        return response()->json([
            'message' => 'Book created successfully',
            'book' => $book,
        ], 201);
    }
}
