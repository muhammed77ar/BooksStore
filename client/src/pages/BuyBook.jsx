import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { FiPlus } from "react-icons/fi";
import { IoMdEye } from "react-icons/io";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';

export default function BuyBook() {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger when 20% of the section is visible
    });

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
            transition: { type: "spring", duration: 1, delay: 1 },
        }),
    };

    const textVariant = {
        hidden: {
            y: 50, // Move up into view
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
                delay: 0.8,
            },
        },
    };

    const handleAddToCart = (book) => {
        dispatch(addToCart({ ...book, quantity: 1 })); // Add the book with a default quantity of 1
    };

    return (
        <div ref={ref} className=" bg-white bg-cover bg-left py-10">
            <motion.div variants={textVariant} initial="hidden" animate={inView ? "show" : "hidden"} className=" pb-10 px-6">
                <h1 className=" text-center font-lexend font-bold capitalize text-3xl text-slate-800">Browse Our best selling books</h1>
                <p className=" text-center text-slate-700 text-sm mt-1 lowercase">Discover the perfect book to buy and start your next reading adventure.</p>
            </motion.div>
            <Swiper
                style={{
                    '--swiper-pagination-color': '#000',
                    '--swiper-pagination-bottom': "-6px",
                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true} // Enable infinite looping
                modules={[EffectCoverflow, Pagination]}
                className=" py-6 h-[500px]"
                breakpoints={{
                    640: {
                        slidesPerView: 1, // 1 slide on small screens
                    },
                    768: {
                        slidesPerView: 2, // 2 slides on medium screens
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides on larger screens
                    },
                }}
            >
                {books.map((book) => (
                    <SwiperSlide key={book.id} className="flex justify-center sm:w-[20%] w-[20%] relative">
                        <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="bottom" className="flex flex-col items-center">
                            <img
                                className="object-cover w-auto max-h-[400px] rounded-lg border-2 border-gray-300"
                                src={book.imageUrl}
                                alt={book.title}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            <div className=" mt-2 flex flex-col items-center justify-center">
                                <p className='text-center text-sm font-normal text-slate-700'>{book.author}</p>
                                <p className='text-center font-medium text-base'>{book.title}</p>
                                <p className='text-center text-green-800'>{book.price} DH</p>
                            </div>
                            <div className=' absolute top-2 sm:right-10 right-4 flex flex-col gap-2'>
                                <FiPlus onClick={() => handleAddToCart({ id: book.id, title: book.title, genre: book.genre, imageUrl: book.imageUrl, price: book.price })} className='bg-black text-white w-[30px] h-[30px] rounded-full hover:text-black hover:bg-white transition cursor-pointer' />
                                <Link to={`bookdetails/${book.id}`}><IoMdEye className='bg-black text-white w-[30px] h-[30px] rounded-full  hover:text-black hover:bg-white transition cursor-pointer' /></Link>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}
