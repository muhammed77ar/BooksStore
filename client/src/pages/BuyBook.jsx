import { Swiper, SwiperSlide } from 'swiper/react';

import books from '../books';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function BuyBook() {
    return (
        <div className=''>
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
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true} // Enable infinite looping
                modules={[EffectCoverflow, Pagination]}
                className=" py-6 my-10 w-full h-full "
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
                    <SwiperSlide key={book.isbn} className="w-[300px]">
                        <div className="flex flex-col items-center">
                            <img
                                className="object-cover h-[300px] w-full rounded-lg"
                                src={book.imageUrl}
                                alt={book.title}
                            />
                            <div className="mt-2 text-center text-sm font-medium">
                                {book.author}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
