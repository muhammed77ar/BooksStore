<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{

    public function index(){
        return response()->json(Genre::all());
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:genres,name',
        ]);

        $genre = Genre::create($validatedData);

        return response()->json([
            'message' => 'Genre created successfully',
            'genre' => $genre,
        ], 201);
    }
}
