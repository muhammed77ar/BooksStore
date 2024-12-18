import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function BooksList({books}) {

    function formatJoinDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

  return (
    <section className="container mx-auto p-6">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Book cover image</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Genre</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">best seller</th>
                <th className="px-4 py-3">created at</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {books.map(book => (
                <tr key={book?.id} className="text-gray-700 border">
                  <td className="px-4 py-2 flex justify-center"><img src={`${import.meta.env.VITE_API_BASE_URL}${book?.image_url}`} className=" w-[50px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" alt="" /></td>
                  <td className="px-4 py-3 text-ms font-semibold">{book?.title}</td>
                  <td className="px-4 py-3 text-sm"><span className=" bg-green-300 p-2 font-medium rounded-full">{book?.price}DH</span></td>
                  <td className="px-4 py-3 text-ms font-semibold">{book?.genre?.name}</td>
                  <td className="px-4 py-3 text-sm"><span className={`${book?.stock > 0 ? "bg-blue-200" : "bg-red-200 whitespace-pre"} px-2.5 py-2 font-semibold rounded-full`}>{book?.stock > 0 ? book?.stock : "Out Of Stock"}</span></td>
                  <td className="px-4 py-3 text-sm"><span className={`${book?.is_bestseller === false ? "bg-red-500" : "bg-green-500"} px-2 py-2 font-semibold text-white rounded-full`}>{book?.is_bestseller === false ? "No" : "Yes"}</span></td>
                  <td className="px-4 py-3 text-ms font-semibold">{formatJoinDate(book?.created_at)}</td>
                  <td className="px-4 text-sm"><div className="flex justify-center items-center gap-2"><Link to={`/admin/editbook/${book?.id}`}><MdEdit className="text-2xl text-blue-500" /></Link><MdDelete className=" text-2xl text-red-500" /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
