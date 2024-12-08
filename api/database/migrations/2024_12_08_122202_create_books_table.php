<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('author');
            $table->unsignedBigInteger('genre_id');
            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade');
            $table->decimal('price', 8, 2);
            $table->integer('publication_year')->nullable();
            $table->string('publisher')->nullable();
            $table->string('language');
            $table->integer('pages')->nullable();
            $table->text('description');
            $table->integer('stock')->default(1);
            $table->decimal('rating', 2, 1)->nullable();
            $table->string('cover_type')->nullable();
            $table->string('image_url');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
