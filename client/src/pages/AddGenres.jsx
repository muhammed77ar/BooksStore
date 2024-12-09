import { useRef } from "react";
import GenresList from "./GenresList";
import axiosClient from "../axios";

export default function AddGenres() {
  const GenreNameRef = useRef();

  const HandelSubmit = async (e) => {
    e.preventDefault();
    const payload = {name : GenreNameRef.current.value};
    try {
      const response = await axiosClient.post("api/admin/addgenre", payload);
      GenreNameRef.current.value = '';
      location.reload()
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <section className=" w-full flex flex-col items-center">
      <div className=" w-[60%] mt-4 p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 ">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add Genre</h1>
        <form className=" flex items-center gap-4 mt-2 w-full" onSubmit={HandelSubmit}>
          <div className=" w-full">
            <label className="text-white dark:text-gray-200" htmlFor="name">
              Name
            </label>
            <input
              ref={GenreNameRef}
              id="name"
              type="text"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <button type="submit" className=" mt-8 px-4 py-2 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </form>
      </div>
      <GenresList />
    </section>
  )
}
