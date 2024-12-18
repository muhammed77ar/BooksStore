import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { decrementQuantity, incrementQuantity, removeItem } from '../Redux/CartSlice';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';

export default function Cart({ isOpen, onClose }) {
    const cartRef = useRef(null);
    const books = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const total = () => {
        let total = 0
        books.map((book) => (total += book.quantity * book.price))
        return total.toFixed(2)
    }

    const navigateTo = () => {
        navigate(`/checkout`);
    };


    useEffect(() => {
        // Function to close the cart when clicking outside
        const handleClickOutside = (event) => {
            if (!event.target.closest('.cart') && !cartRef.current.contains(event.target)) {
                onClose(); // Close the cart if clicked outside and not inside the cart
            }
        };

        // Attach the event listener when the cart is open
        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        // Remove the event listener when the component is unmounted or the cart is closed
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen, onClose]);
    return (
        <div ref={cartRef} className=' w-full md:w-[40%] h-[85vh] bg-white rounded-xl z-99 absolute right-0 md:right-24 top-[60px] border-[5px] overflow-auto shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <h1 className=' text-xl uppercase py-4 font-gentium font-extrabold flex justify-center items-center gap-2'>shopping cart <HiOutlineShoppingCart /></h1>
            <div className='bg-slate-300 h-[2px] mx-4'></div>
            {
                books.length === 0 ?
                    <div>
                        <img src="../images/emptycart.png" alt="" />
                        <h3 className=' text-center pb-3'>Your shopping cart is still empty!!</h3>
                    </div>
                    :
                    <ul className=' flex flex-col gap-2'>
                        {books.map(book => (
                            <li key={book.id} className=' flex gap-2 mx-3 border-b-2 py-2'>
                                <Link className='w-[26%]' to={`bookdetails/${book?.id}`}><img className=' w-full h-full' src={`${import.meta.env.VITE_API_BASE_URL}${book.imageUrl}`} alt="" /></Link>
                                <div className=' flex items-center justify-between w-full'>
                                    <div>
                                        <h1 className=' text-lg font-bold'>{book.title}</h1>
                                        <p className=' text-xs text-gray-400 uppercase'>Genre: {book?.genre}</p>
                                        <div className=' flex items-center gap-1 mt-2'>
                                        <CiCircleMinus className='text-3xl cursor-pointer' onClick={() => dispatch(decrementQuantity(book.id))} />
                                        <span className=' text-xl'>{book.quantity}</span>
                                        <CiCirclePlus className='text-3xl cursor-pointer' onClick={() => dispatch(incrementQuantity(book.id))} />
                                        </div>
                                        <p className=' text-sm text-gray-500 uppercase'>Quantity: {book.quantity}</p>
                                        <p className=' text-sm font-bold text-red-600 cursor-pointer mt-2' onClick={() => dispatch(removeItem(book.id))}>Remove</p>
                                    </div>
                                    <div className=''>{(book.quantity * book.price).toFixed(2)}DH</div>
                                </div>
                            </li>
                        ))}
                        <li className='flex justify-between px-3 py-3 font-medium text-xl'>
                            <p className=''>Subtotal</p>
                            <p className=''>{total()}DH</p>
                        </li>
                        <button onClick={() => navigateTo()} className="mt-1 group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50"><span className="relative z-10">Checkout</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                    </ul>
            }
        </div>
    )
}
