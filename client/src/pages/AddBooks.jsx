import { useState } from "react";
import { useSelector } from "react-redux";
import axiosClient from "../axios";

export default function AddBooks() {
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 mb-2 fill-gray-500"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                    />
                  </svg>
                  <p className="text-sm text-gray-600">Drag your file here or Browse</p>
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
  );
}
