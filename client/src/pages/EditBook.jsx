import { useState } from "react";
import axiosClient from "../axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function EditBook() {
    const { id } = useParams();
    const books = useSelector((state) => state.books);
    const findBook = books.find((book) => book.id === parseInt(id));

    const genres = useSelector((state) => state.genres);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const previewURL = URL.createObjectURL(file); // Generate a preview URL
            setImagePreview(previewURL); // Set the preview URL to state
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new FormData object
        const formData = new FormData();

        // Loop through each form field and append the data to FormData
        for (let i = 0; i < e.target.elements.length; i++) {
            const element = e.target.elements[i];
            // Skip non-input elements like buttons
            if (element.name && element.type !== 'button' && element.type !== 'file') {
                formData.append(element.name, element.value);
            }
        }

        // Handle file separately
        if (e.target.image_url.files[0]) {
            formData.append("image_url", e.target.image_url.files[0]); // Handle file input
        }

        try {
            const response = await axiosClient.post("api/admin/addbook", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Important for file uploads
                },
            });
            console.log(response);
            location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 ">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="title">
                            Title
                        </label>
                        <input
                            defaultValue={findBook?.title}
                            id="title"
                            name="title"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="author">
                            Author
                        </label>
                        <input
                            defaultValue={findBook?.author}
                            id="author"
                            name="author"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="language">
                            Language
                        </label>
                        <input
                            defaultValue={findBook?.language}
                            id="language"
                            name="language"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="price">
                            Price
                        </label>
                        <input
                            defaultValue={findBook?.price}
                            id="price"
                            name="price"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="publicationYear">
                            Publication Year
                        </label>
                        <input
                            defaultValue={findBook?.publication_year}
                            id="publicationYear"
                            name="publication_year"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="genre_id">
                            Genre
                        </label>
                        <select
                            defaultValue={findBook?.genre?.name}
                            id="genre_id"
                            name="genre_id"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        >
                            <option disabled value={""}>Select the Genre</option>
                            {genres.map((genre) => (
                                <option key={genre?.id} value={genre?.id}>
                                    {genre?.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="pages">
                            Pages
                        </label>
                        <input
                            defaultValue={findBook?.pages}
                            id="pages"
                            name="pages"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="stock">
                            Stock
                        </label>
                        <input
                         defaultValue={findBook?.stock}
                            id="stock"
                            type="number"
                            name="stock"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="rating">
                            Rating
                        </label>
                        <input
                             defaultValue={findBook?.rating}
                            id="rating"
                            type="text"
                            name="rating"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="coverType">
                            Cover Type
                        </label>
                        <input
                             defaultValue={findBook?.cover_type}
                            id="coverType"
                            name="cover_type"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            defaultValue={findBook?.description}
                            id="description"
                            name="description"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        ></textarea>
                    </div>

                    <div>
                        <label
                            htmlFor="uploadFile1"
                            className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
                        >
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-[30%] h-[90%] object-fill rounded border-2 border-gray-600"
                                />
                            ) : (
                                <>
                                    <img
                                    src={`${import.meta.env.VITE_API_BASE_URL}${findBook?.image_url}`}
                                    alt=""
                                    className="w-[30%] h-[90%] object-fill rounded border-2 border-gray-600"
                                />
                                </>
                            )}
                            <input
                                type="file"
                                name="image_url"
                                id="uploadFile1"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>

                    <div className="flex justify-start items-center w-full">
                        <button
                            type="submit"
                            className="block px-6 py-2 mt-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Add Book
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}
