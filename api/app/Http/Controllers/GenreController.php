<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Client\Request as ClientRequest;
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

    public function update(Request $request, $id){
        $genre = Genre::findOrFail($id);

        $validatedData = $request->validate([
            'name' => "required|string|max:255|unique:genres,name,{$id}"
        ]);

        $genre->update($validatedData);

        return response()->json([
            'message' => 'Genre updated successfully',
            'genre' => $genre,
        ], 200);
    }
}
