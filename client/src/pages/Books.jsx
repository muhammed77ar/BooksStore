import { useDispatch, useSelector } from "react-redux"
import { FiPlus } from "react-icons/fi";
import { addToCart } from "../Redux/CartSlice";
import StarsRating2 from "../Components/StarsRating2";
import { useNavigate } from "react-router-dom";

export default function Books() {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleAddToCart = (book) => {
        dispatch(addToCart({ ...book, quantity: 1 })); // Add the book with a default quantity of 1
    };

    const handleButtonClick = (id) => {
        navigate(`/bookdetails/${id}`); // Use an absolute path
    };

    return (
        <div className=" mt-[80px] mb-[50px]">
            <ul className=" flex flex-wrap gap-11 px-14">
                {books.map(book => (
                    <li key={book.id} className="w-[250px] relative mt-6">
                        <div className=" relative flex justify-center w-full items-center py-7 rounded-lg bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-[#e4e4e7] via-[#a1a1aa] to-[#52525b]">
                            <img className="w-[200px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" src={book.imageUrl} alt="" />
                            <StarsRating2 bookRating={book.rating} />
                        </div>
                        <div className=" mt-2 flex flex-col items-center justify-center">
                            <p className='text-center text-sm font-normal text-slate-700'>{book.author}</p>
                            <p className='text-center font-medium text-base'>{book.title}</p>
                            <div className=" flex justify-between w-full mt-1">
                                <p className='text-center text-green-800'>{book.price} DH</p>
                                <button onClick={() => handleButtonClick(book.id)} className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-transparent  font-normal text-black duration-500 underline"><div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Read more</div><div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
                            </div>

                        </div>
                        <FiPlus onClick={() => handleAddToCart({ id: book.id, title: book.title, genre: book.genre, imageUrl: book.imageUrl, price: book.price })} className=" absolute -top-2 -right-2 bg-white text-3xl rounded-full border-2 border-black cursor-pointer" />
                    </li>
                ))}
            </ul>
        </div>
    )
}
