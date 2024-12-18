import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import StarsRating from '../Components/StarsRating';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import { MdAddShoppingCart } from 'react-icons/md';

export default function BookDetails() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { pathname } = useLocation();
  const findBook = books.find((book) => book.id === parseInt(id));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'bottom' ? 100 : 0,
    }),
    show: (direction) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: 'spring', duration: 0.5, delay: 0.3 },
    }),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const addBookToCart = (book) => {
    dispatch(addToCart(book));
  };




  return (
    <div ref={ref}>
      <div className="py-10 mt-[60px] sm:bg-[image:linear-gradient(to_right,#f0eee2_0%,#f0eee2_25%,white_25%,white_100%)] flex flex-col items-center sm:items-start sm:flex-row w-full gap-8 sm:gap-0">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          custom="left"
          className="flex justify-center sm:block"
        >
          <div className='relative sm:ml-40 w-[55%] sm:w-[300px]'>
            {
              findBook?.stock === 0 && <div className=' absolute rounded-lg bg-black/50 w-full h-full flex items-center justify-center'>
                <h1 className=' bg-slate-300 w-[100%] text-center py-2 text-red-600 text-2xl font-extrabold font-gentium'>Out of Stock</h1>
              </div>
            }
            <img
              src={`${import.meta.env.VITE_API_BASE_URL}${findBook?.image_url}`}
              alt={`Cover of the book ${findBook?.title}`}
              className="w-full sm:w-[300px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            />
          </div>

        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          custom="right"
          className="sm:ml-10 ml-0 text-center sm:text-start w-full sm:w-[50%]"
        >
          <h2 className="text-3xl font-medium mb-4">{findBook?.title}</h2>
          <p className="text-gray-600">
            <span className="underline">Author:</span> {findBook?.author}
          </p>
          <p className="text-gray-600">
            <span className="underline">Genre:</span> {findBook?.genre?.name}
          </p>
          <p className="text-gray-600">
            <span className="underline">Language:</span> {findBook?.language}
          </p>
          <p className="text-gray-600">
            <span className="underline">Publication Year:</span> {findBook?.publication_year}
          </p>
          <StarsRating bookRating={findBook?.rating} />
          <p className="mt-2 sm:px-0 px-5">
            <span className="underline">Description:</span> {findBook?.description}
          </p>
          <p className="text-green-800 font-medium text-lg mt-2">
            <span className="underline">Price:</span> {findBook?.price}DH
          </p>
          <div className="mt-2 flex gap-2 items-center sm:justify-start justify-center">
            <CiCircleMinus
              className="text-4xl cursor-pointer"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            />
            <p className="text-2xl">{quantity}</p>
            <CiCirclePlus
              className="text-4xl cursor-pointer"
              onClick={() => setQuantity((prev) => prev + 1)}
            />
          </div>
          <div className=' flex justify-center md:justify-start'>
            {findBook?.stock === 0 ? <button
              className="mt-2 flex items-center justify-center gap-2 bg-blue-400 px-3 py-2 rounded-full text-white uppercase cursor-not-allowed"
            >
              <MdAddShoppingCart className="text-xl font-bold" /> Add to Cart
            </button> : <button
              className="mt-2 flex items-center justify-center gap-2 bg-blue-400 px-3 py-2 rounded-full text-white uppercase"
              onClick={() => addBookToCart({ id: findBook?.id, title: findBook?.title, genre: findBook?.genre?.name, imageUrl: findBook?.image_url, price: findBook?.price, quantity })}
            >
              <MdAddShoppingCart className="text-xl font-bold" /> Add to Cart
            </button>}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
