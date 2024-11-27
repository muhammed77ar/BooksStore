import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";


import books from '../books';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function BuyBook() {
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
    return (
        <div ref={ref} className=" bg-[url('/images/paper2.jpg')] bg-cover bg-left py-10">
            {/* <h1 className="text-4xl font-medium mx-10 mt-10">
                Our Gallery
            </h1>
            <p className=" mx-10 text-gray-500">Discover Morocco's Beauty Through Our Lens</p>
            <div className="my-2 mx-10">
                <span className="inline-block w-40 h-1 bg-[#d67940] rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-[#d67940] rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-[#d67940] rounded-full"></span>
            </div> */}
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
                    <SwiperSlide key={book.isbn} className="flex justify-center md:w-[20%] w-[20%]">
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
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}
