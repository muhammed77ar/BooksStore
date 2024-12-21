import { useRef } from "react";
import GenresList from "./GenresList";
import axiosClient from "../axios";
import { useNavigate } from "react-router-dom";

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
    <section className="container mx-auto p-6">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Id</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Created_at</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {genres.map(genre => (
                    <tr key={genre?.id} className="text-gray-700">
                      <td className="px-4 py-3 border">{genre?.id}</td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        {editId === genre?.id ? (
                          <input
                            type="text"
                            className="border rounded px-2 py-1"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                          />
                        ) : (
                          genre?.name
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm border">{formatJoinDate(genre?.created_at)}</td>
                      <td className="px-4 text- border">
                        <div className="flex justify-center items-center gap-2">
                          {editId === genre?.id ? (
                            <>
                              <MdCheck
                                className="text-2xl text-green-500 cursor-pointer"
                                onClick={() => handleSaveClick(genre?.id)}
                              />
                              <MdCancel
                                className="text-2xl text-gray-500 cursor-pointer"
                                onClick={handleCancelClick}
                              />
                            </>
                          ) : (
                            <>
                              <MdEdit
                                className="text-2xl text-blue-500 cursor-pointer"
                                onClick={() => handleEditClick(genre?.id, genre?.name)}
                              />
                              <MdDelete onClick={() => handleDelete(genre?.id)} className="text-2xl text-red-500 cursor-pointer" />
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
  )
}
