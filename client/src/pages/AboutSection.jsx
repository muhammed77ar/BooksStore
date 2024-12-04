import { SiListmonk } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function AboutSection() {
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
    <div ref={ref} className=' h-auto flex md:flex-row flex-col my-20 items-center'>
      <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="left" className=" w-full md:w-[50%] px-10 py-7 text-center md:text-start">
        <h1 className=" text-4xl font-semibold">A Little About Us</h1>
        <h3 className=" text-xl mt-3 font-medium">At <span className=" text-2xl text-amber-700 font-bold">Thoughts</span>, we bring books and readers together, sparking inspiration and connection.</h3>
        <p className=" mt-8 font-normal text-lg">Our journey has been shaped by a love for books and a dedication to serving readers of all kinds. Whether you're seeking a classic novel, the latest bestseller, or a unique recommendation, we’re here to help you discover your next adventure.</p>
        <ul className=" flex flex-col mt-7 gap-3">
          <li className="flex items-center gap-2"><SiListmonk className=" text-amber-700 text-xl" /><p className=" font-light">Trusted "Pay on Delivery" payment method for your convenience.</p></li>
          <li className="flex items-center gap-2"><SiListmonk className=" text-amber-700 text-xl" /><p className=" font-light">Over 100,000 happy readers who trust us.</p></li>
          <li className="flex items-center gap-2"><SiListmonk className=" text-amber-700 text-xl" /><p className=" font-light">Hundreds of books across all genres and ages.</p></li>
        </ul>
      </motion.div>
      <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="right" className="w-full md:w-[50%] h-[550px] px-6">
        <div className="grid grid-cols-4 grid-rows-6 gap-4 h-full">
          <div className="col-span-2 row-span-3 bg-[url('../images/aboutImag.jpg')] bg-cover bg-bottom rounded-3xl"></div>
          <div className="col-span-2 row-span-3 col-start-3 bg-[url('../images/aboutImag2.jpg')] bg-cover bg-bottom rounded-3xl"></div>
          <div className="col-span-4 row-span-3 row-start-4 bg-[url('../images/aboutImag3.jpg')] bg-cover bg-bottom rounded-3xl"></div>
        </div>
      </motion.div>
    </div>
  )
}
