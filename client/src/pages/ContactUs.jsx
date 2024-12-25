import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ContactUs() {
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
    <div ref={ref} className="container mx-auto px-2 md:px-4 bg-slate-100 pt-10 pb-20">
      <section className="">
        <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="bottom" className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-3 px-6 text-3xl font-bold">Contact us</h2>
            <p className="text-center text-gray-600 mb-8">
              Have Questions? We’re Here to Help!
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center">
          {/* Form Section */}
          <motion.form variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="left" className="mb-12 w-full shrink-0 grow-0 basis-auto px-6 md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-slate-800" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-slate-800" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-slate-800" htmlFor="message">
                Message
              </label>
              <textarea
                className="px-2 py-2 border rounded-[5px] w-full outline-none"
                id="message"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              className="group w-full relative inline-flex h-12 items-center border-none justify-center overflow-hidden rounded-xl bg-slate-800 px-6 font-medium text-neutral-200"

            >
              <span>Send</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </motion.form>

          <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="right" className=" flex flex-col md:flex-row gap-16 items-start justify-center px-8 md:px-0 md:justify-start mt-5">
            <div className=" flex flex-col gap-10">
              <div className=" flex items-center gap-3 ">
                <MdOutlineEmail className=" text-4xl" />
                <div className=" flex flex-col">
                  <p className=" font-bold">Email Address</p>
                  <a href="mailto:support@example.com" className="text-gray-500">
                    thoughts777@gmail.com
                  </a>
                </div>
              </div>
              <div className=" flex items-center gap-3">
                <MdOutlinePhoneCallback className=" text-4xl" />
                <div className=" flex flex-col">
                  <p className=" font-bold">Phone Number</p>
                  <a href="mailto:support@example.com" className="text-gray-500">
                    <a href="tel:+212123456789" className="text-gray-500">+212 123 456 789</a>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className=" flex items-center gap-3">
                <IoLocationOutline className=" text-4xl" />
                <div className=" flex flex-col">
                  <p className=" font-bold">Address</p>
                  <p className="text-gray-500">
                    123 Main Street, Settat, Morocco
                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-3">
                <FaBusinessTime className=" text-4xl" />
                <div className=" flex flex-col">
                  <p className=" font-bold">Business Hours</p>
                  <p className="text-gray-500">
                    Mon-Fri, 9 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
