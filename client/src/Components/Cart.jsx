import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
export default function Cart({ isOpen, onClose }) {
    const cartRef = useRef(null);
    const books = useSelector((state) => state.cart);  // Access cart.books correctly
    console.log("Books in cart:", books);
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
        <div ref={cartRef} className=' w-[30%] h-auto bg-white z-99 absolute right-24 top-[60px] border-[5px]'>
            <h1 className=' text-xl pl-3 uppercase text-center py-4 font-gentium font-extrabold'>book cart</h1>
            <div className='bg-slate-300 h-[2px] mx-4'></div>
            {/* <ul>
                {books.map(book => (
                    <li key={book.id}>

                    </li>
                ))}
            </ul> */}
        </div>
    )
}
