<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BooksController extends Controller
{

    public function index()
    {
        $books = Book::with('genre')->orderBy('created_at', 'desc')->get();
        return response()->json(["books" => $books]);
    }

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
            'is_bestseller' => 'nullable|boolean',
            'cover_type' => 'nullable|string|max:255',
            'image_url' => 'required|image|mimes:jpg,jpeg,png,gif|max:3048',
        ]);



        $imagePath = $request->file('image_url')->store('/images/booksImages', 'public');

        $validatedData['image_url'] = '/storage/' . $imagePath;


        $book = Book::create($validatedData);

        return response()->json([
            'message' => 'Book created successfully',
            'book' => $book,
        ], 201);
    }


    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        // Preprocess boolean fields
        $request->merge([
            'is_bestseller' => filter_var($request->is_bestseller, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE),
        ]);

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
            'is_bestseller' => 'nullable|boolean',
            'cover_type' => 'nullable|string|max:255',
            'image_url' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:3048',
        ]);


        if ($request->hasFile('image_url')) {
            $imagePath = $request->file('image_url')->store('/images/booksImages', 'public');
            $validatedData['image_url'] = '/storage/' . $imagePath;
        }

        $book->update($validatedData);

        return response()->json([
            'message' => 'Book updated successfully',
            'book' => $book,
        ], 200);
    }
}
