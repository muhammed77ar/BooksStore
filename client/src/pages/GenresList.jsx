import { useDispatch, useSelector } from 'react-redux'
import { MdEdit, MdDelete, MdCheck, MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import axiosClient from '../axios';
import { updateGenre } from '../Redux/GenresSlice';

export default function GenresList() {
  const genres = useSelector((state) => state.genres);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const dispatch = useDispatch();
  function formatJoinDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  const handleEditClick = (id, currentName) => {
    setEditId(id);
    setEditName(currentName); // Set the current name in the input
  };

  const handleSaveClick = async (id) => {
    console.log("Edit Name:", editName); 
    if (!editName.trim()) {
      alert("Name field cannot be empty");
      return;
    }
    const payload = { name: editName };
    try {
      const response = await axiosClient.put(`api/admin/editgenre/${id}`, payload,{
        headers: {
          "Content-Type": "application/json",
        },
      }
      );
      dispatch(updateGenre({ id, name: editName }));

      setEditId(null);
      setEditName("");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.message || "An error occurred");
    }
    // Reset edit state
    setEditId(null);
    setEditName("");
  };

  const handleCancelClick = () => {
    setEditId(null);
    setEditName("");
  };

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
                          <MdDelete className="text-2xl text-red-500 cursor-pointer" />
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
