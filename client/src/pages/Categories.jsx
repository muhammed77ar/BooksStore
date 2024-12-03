import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Components/Navbar";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function Categories() {
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
  return (
    <main>
      <div ref={ref} className=" h-auto px-4 md:px-28 py-6 bg-white bg-cover bg-center">
      <motion.div  variants={textVariant} initial="hidden" animate={inView ? "show" : "hidden"} className=" py-10">
        <h1 className=" text-center font-lexend font-bold capitalize text-3xl text-slate-800">Explore Our Book Categories</h1>
        <p className=" text-center text-slate-700 text-sm mt-1 lowercase">Find Your Next Favorite Read Across a World of Genres</p>
      </motion.div>
      <div className="grid grid-cols-2 grid-rows-10 md:grid-cols-6 md:grid-rows-6  gap-3 h-full">
        <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="left" className="h-[150px] md:h-[300px] col-span-2 row-span-2 md:col-span-3 md:row-span-3 rounded-2xl bg-[url('../images/pdcategory.jpg')] bg-cover bg-center shadow-custom">
          <div className="relative w-full h-full bg-black/50 rounded-2xl group cursor-pointer">
            <button className="absolute top-2 right-2 inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
              <div className="rotate-0 transition duration-300 group-hover:-rotate-45">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <div className=" absolute bottom-2 left-3 text-white">
              <FlipLink>Personal Development</FlipLink>
              <p className=" text-sm">Unlock Your Potential and Transform Your Life</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="right" className="h-[150px] md:h-[300px] col-span-2 row-span-2 row-start-3 md:col-span-3 md:row-span-3 md:col-start-4 rounded-2xl bg-[url('../images/horror.jpg')] bg-cover bg-center shadow-custom">
          <div className="relative w-full h-full rounded-2xl group cursor-pointer">
            <button className="absolute top-2 right-2 inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
              <div className="rotate-0 transition duration-300 group-hover:-rotate-45">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <div className=" absolute bottom-2 left-3 text-white">
              <FlipLink>Horror</FlipLink>
              <p className=" text-sm">Face Your Fears in Stories of Terror and Suspense</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="bottom"  className="h-[150px] md:h-[250px] col-span-2 row-span-2 row-start-5 md:col-span-2 md:row-span-3 md:row-start-4 rounded-2xl bg-[url('../images/fantasy.jpg')] bg-cover bg-center shadow-custom">
          <div className="relative w-full h-full bg-black/50 rounded-2xl group cursor-pointer">
            <button className="absolute top-2 right-2 inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
              <div className="rotate-0 transition duration-300 group-hover:-rotate-45">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <div className=" absolute bottom-2 left-3 text-white">
              <FlipLink>Fantasy</FlipLink>
              <p className=" text-sm">Enter Worlds of Magic, Mystery, and Wonder</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="bottom" className="h-[150px] md:h-[250px] col-span-2 row-span-2 row-start-7 md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-4 rounded-2xl bg-[url('../images/romance.jpg')] bg-cover bg-center shadow-custom">
          <div className="relative w-full h-full bg-black/50 rounded-2xl group cursor-pointer">
            <button className="absolute top-2 right-2 inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
              <div className="rotate-0 transition duration-300 group-hover:-rotate-45">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <div className=" absolute bottom-2 left-3 text-white">
              <FlipLink>Romance</FlipLink>
              <p className=" text-sm">Explore Tales of Love, Passion, and Connection</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"} custom="bottom" className="h-[150px] md:h-[250px] col-span-2 row-span-2 row-start-9 md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-4 rounded-2xl bg-[url('../images/humor.jpg')] bg-cover bg-center shadow-custom">
          <div className="relative w-full h-full bg-black/50 rounded-2xl group cursor-pointer">
            <button className="absolute top-2 right-2 inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
              <div className="rotate-0 transition duration-300 group-hover:-rotate-45">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <div className=" absolute bottom-2 left-3 text-white">
              <FlipLink>Humor</FlipLink>
              <p className=" text-sm">Laugh Out Loud with Wit and Comedy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </main>
  )
}



const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-wrap text-2xl font-black uppercase"
      style={{
        lineHeight: 1,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};