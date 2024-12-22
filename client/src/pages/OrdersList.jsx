import { useSelector } from 'react-redux';

export default function OrdersList() {
  const orders = useSelector((state) => state.orders);

  function formatJoinDate(dateString) {
    const date = new Date(dateString);
    // Extract date components
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    // Extract time components
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format

    // Combine date and time
    return `${day} ${month} ${year}, ${hours}:${minutes} ${amPm}`;

  }

  return (
    <section className="container mx-auto p-6">
      <div className="w-auto mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-auto overflow-x-auto">
          <table className="w-[1500px]">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-center text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3 border-2">Full Name</th>
                <th className="px-4 py-3 border-2">Email</th>
                <th className="px-4 py-3 border-2">Shipping Address</th>
                <th className="px-4 py-3 border-2">Phone Number</th>
                <th className="px-4 py-3 border-2">CIN</th>
                <th className="px-4 py-3 border-2">Books</th>
                <th className="px-4 py-3 border-2">Total Price</th>
                <th className="px-4 py-3 border-2">Order time</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders.map(order => {
                const totalPrice = order.items.reduce(
                  (acc, item) => acc + parseFloat(item.price) * item.quantity,
                  0
                );

                return (
                  <tr key={order.id} className="text-gray-700 text-center">
                    <td className="px-4 py-3 border-2">{order?.full_name}</td>
                    <td className="px-4 py-3 border-2 w-[100px]">{order?.email}</td>
                    <td className="px-4 py-3 border-2 w-[200px]">{order?.shipping_address}</td>
                    <td className="px-4 py-3 border-2">{order?.phone_number}</td>
                    <td className="px-4 py-3 border-2">{order?.cin}</td>
                    <td className="px-4 py-3 border-2">
                      {order?.items.map(item => (
                        <div
                          key={item?.id}
                          className="flex gap-1 items-center border-b border-black py-2"
                        >
                          <img
                            className="w-[40px]"
                            src={`${import.meta.env.VITE_API_BASE_URL}${item?.image_url}`}
                            alt=""
                          />
                          <div className="text-sm">
                            <p className="font-medium">{item?.book_title}</p>
                            <p>quantity: {item?.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-3 border-2 font-medium text-green-700">
                      {totalPrice.toFixed(2)} DH
                    </td>
                    <td className='px-4 py-3 border-2'>{formatJoinDate(order?.created_at)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
