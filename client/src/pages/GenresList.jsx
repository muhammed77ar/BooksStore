import { useSelector } from 'react-redux'

export default function GenresList() {
    const genres = useSelector((state) => state.genres)
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
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Id</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Created_at</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {genres.map(genre => (
                <tr key={genre?.id} className="text-gray-700">
                  <td className="px-4 py-3 border">{genre?.id}</td>
                  <td className="px-4 py-3 text-ms font-semibold border">{genre?.name}</td>
                  <td className="px-4 py-3 text-sm border">{formatJoinDate(genre?.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
