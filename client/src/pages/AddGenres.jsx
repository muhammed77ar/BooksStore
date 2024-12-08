
export default function AddGenres() {
  return (
   <section className=" w-full flex justify-center">
    <div className=" w-[60%] mt-4 p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 ">
      <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add Genre</h1>
      <form className=" flex items-center gap-4 mt-2 w-full">
          <div className=" w-full">
            <label className="text-white dark:text-gray-200" htmlFor="title">
              Name
            </label>
            <input
              id="title"
              type="text"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <button className=" mt-8 px-4 py-2 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Save
          </button>
      </form>
    </div>
   </section> 
  )
}
