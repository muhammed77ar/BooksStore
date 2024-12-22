import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosClient from '../axios';
import { resetCart } from '../Redux/CartSlice';
import Swal from "sweetalert2";


export default function Checkout() {
    const books = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger when 20% of the section is visible
    });
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    const total = () => {
        let total = 0
        books.map((book) => (total += book.quantity * book.price))
        return total.toFixed(2)
    }
    const cardVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "bottom" ? 100 : 0,
        }),
        show: (direction) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'spring', duration: 0.5, delay: 0.3 },
        }),
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const orderData = {
            full_name: e.target.full_name.value,
            shipping_address: e.target.shipping_address.value,
            email: e.target.email.value,
            phone_number: e.target.phone_number.value,
            cin: e.target.cin.value,
            items: books.map((book) => ({
                book_title: book.title,          // Matches backend expected field
                book_genre: book.genre,          // Matches backend expected field
                quantity: book.quantity,         // Matches backend expected field
                price: book.price,               // Matches backend expected field
                image_url: book.imageUrl || '',  // Matches backend expected field (fallback to empty string if no image)
            })),
        };

        try {
          const response = await axiosClient.post("api/orders", orderData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your order has been placed successfully. We will contact you soon.',
            showConfirmButton: false,
            timer: 2500,
            willClose: () => {
                navigate('/');
            }
        });
          dispatch(resetCart());
        } catch (error) {
          console.log(error);
        }
      };



    return (
        <div ref={ref} className=" h-auto flex flex-col-reverse md:flex-row py-6 justify-between items-center md:items-start mt-[50px]">
            <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="left" className='w-full md:w-[50%]'>
                <div className='flex items-center justify-center gap-2 px-4 mt-3'><h2 className=' text-xl font-semibold'>Subtotal:</h2><span className=' text-2xl font-bold'>{total()}DH</span></div>
                <ul className=' flex flex-col gap-2 px-4 py-8'>
                    {books.map(book => (
                        <li key={book.id} className=' flex gap-2 items-start border-b-2 pb-2'>
                            <div><img src={`${import.meta.env.VITE_API_BASE_URL}${book.imageUrl}`} className=' w-[100px]' alt="" /></div>
                            <div className=' flex items-center justify-between w-full mt-1'>
                                <div>
                                    <h1 className=' text-lg font-bold'>{book.title}</h1>
                                    <p className=' text-xs text-gray-400 uppercase'>Genre: {book.genre}</p>
                                    <div className=' flex items-center gap-1 mt-2'>
                                    </div>
                                    <p className=' text-sm text-gray-500 uppercase'>Quantity: {book.quantity}</p>
                                </div>
                                <div className=''>{(book.quantity * book.price).toFixed(2)}DH</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>
            <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="right" className="pt-8 flex justify-center w-full md:w-[50%]">
                <div className="w-full mx-7">
                    <div className="px-4 py-10 bg-white [box-shadow:rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] rounded-xl sm:p-10">
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Checkout Form</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            autocomplete="off"
                                            id="full_name"
                                            name="full_name"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Full Name"
                                        />
                                        <label
                                            htmlFor="full_name"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Full Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autocomplete="off"
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Email Address"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Email Address
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autocomplete="off"
                                            id="shipping_address"
                                            name="shipping_address"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Shipping Address"
                                        />
                                        <label
                                            htmlFor="shipping_address"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Shipping Address
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autocomplete="off"
                                            id="phone_number"
                                            name="phone_number"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Phone Number"
                                        />
                                        <label
                                            htmlFor="phone_number"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Phone Number
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autocomplete="off"
                                            id="cin"
                                            name="cin"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Shipping Address"
                                        />
                                        <label
                                            htmlFor="cin"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            CIN
                                        </label>
                                    </div>
                                    <div className="flex justify-center">
                                        <button type="submit" className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50"><span className="relative z-10">Place Order</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
