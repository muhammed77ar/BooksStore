import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import books from '../books';
import Navbar2 from '../Components/Navbar2';
import StarsRating from '../Components/StarsRating';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

export default function BookDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1)
  const { pathname } = useLocation();
  const findBook = books.find(book => book.id === parseInt(id))
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
      transition: { type: "spring", duration: 0.5, delay: 0.3 },
    }),
  };


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, [pathname]);

  return (
    <div ref={ref}>
      <Navbar2 />
      <div className='py-10 bg-[image:linear-gradient(to_right,#f0eee2_0%,#f0eee2_25%,white_25%,white_100%)] flex'>
        <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="left" className=''><img src={findBook.imageUrl} className=' ml-40 w-[300px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' alt="" /></motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="right" className='ml-10 w-[50%]'>
          <h2 className=' text-3xl font-medium mb-4'>{findBook.title}</h2>
          <p className=' text-gray-600'><span className=' underline'>Author:</span> {findBook.author}</p>
          <p className=' text-gray-600'><span className=' underline'>Genre:</span> {findBook.genre}</p>
          <p className=' text-gray-600'><span className=' underline'>Language:</span> {findBook.language}</p>
          <p className=' text-gray-600'><span className=' underline'>publication Year:</span> {findBook.publicationYear}</p>
          <StarsRating bookRating={findBook.rating} />
          <p className=' mt-2'><span className=' underline'>Description:</span> {findBook.description}</p>
          <p className=' text-green-800 font-medium text-lg mt-2'><span className=' underline'>Price:</span> {findBook.price}DH</p>
          <div className=" mt-2 flex gap-2 items-center">
          <span className=' underline'>Quantity:</span>
            <CiCircleMinus className=" text-4xl cursor-pointer" onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)} />
            <p className=' text-2xl'>{quantity}</p>
            <CiCirclePlus className="text-4xl cursor-pointer" onClick={() => setQuantity((prev) => prev + 1)} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
