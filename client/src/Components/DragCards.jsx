import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useInView } from "react-intersection-observer";

export const DragCards = () => {
  // Use the `useInView` hook to detect when the component is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

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

  return (
    <motion.div
      ref={ref} // Attach the ref to the container
      className="relative p-0 m-0 bg-slate-100 bg-left-top place-content-center min-h-screen flex flex-col items-center justify-center z-0 text-[15vw] font-black text-neutral-800 md:text-[100px] w-[100%] overflow-hidden"
    >
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Animate based on the `inView` state
        className=""
      >
        <p className="text-center">
          Our Best Books<span className="text-slate-500">.</span>
        </p>
        <p className="text-center">
          Discover New Titles<span className="text-slate-500">.</span>
        </p>
        <p className="text-center">
          Read and Enjoy<span className="text-slate-500">.</span>
        </p>
      </motion.div>
      <Cards />
    </motion.div>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div>
      <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="../images/book1.jpg"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56 shadow-custom"
      />
      <Card
        containerRef={containerRef}
        src="../images/book2.jpg"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-36 md:w-56 shadow-custom"
      />
      <Card
        containerRef={containerRef}
        src="../images/book3.jpg"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-36 md:w-56 shadow-custom"
      />
      <Card
        containerRef={containerRef}
        src="../images/book4.jpg"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-36 md:w-56 shadow-custom"
      />
      <Card
        containerRef={containerRef}
        src="../images/book5.jpg"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-36 md:w-56 shadow-custom"
      />
      <Card
        containerRef={containerRef}
        src="../images/book6.jpg"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-36 md:w-56 shadow-custom"
      />
      <Card
        containerRef={containerRef}
        src="../images/book7.jpg"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-36 md:w-56 shadow-custom"
      />
    </div>
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 ",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      // dragMomentum={false}
      dragElastic={0.65}
    />
  );
};