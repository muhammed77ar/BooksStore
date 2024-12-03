import { motion } from 'framer-motion';
import AnimatedCharacters from './AnimatedCharacters';
import { Link } from 'react-router-dom';

export default function Hero() {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5, ease: 'easeOut' } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03, // Stagger each child animation
            },
        },
    };

    return (
        <main className="h-screen bg-white bg-cover bg-center sm:bg-none mt-[60px]">
            <div className='px-6 w-full h-full'>
                <div className="grid grid-cols-12 grid-rows-6 h-[90%] gap-4 sm:grid pb-2">
                    <motion.div
                        className="flex flex-col gap-8 sm:gap-5 col-span-12 sm:col-span-6 sm:row-span-7 pt-24 sm:pt-28 "
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <AnimatedCharacters
                            text="Discover Your Next Favorite Book"
                            className="font-extrabold text-6xl text-slate-700 text-center sm:text-start font-gentium uppercase tracking-tighter transform scale-y-125"
                        />
                        <AnimatedCharacters
                            text="From timeless classics to modern bestsellers, explore a world of stories, knowledge, and inspiration. Start your reading adventure today!"
                            className="text-slate-700 text-center sm:text-start"
                        />
                        <motion.div className="flex px-6 md:px-0 flex-col sm:flex-row gap-2 sm:gap-4">
                            <motion.button
                                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border-none bg-slate-800  font-medium text-neutral-200 transition hover:scale-110"
                                initial="hidden"
                                animate="visible"
                                variants={buttonVariants}
                            >
                                <Link to={"/books"} className='px-6 h-full w-full flex justify-center items-center'>
                                    <span>Shop Now</span>
                                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                        <div className="relative h-full w-8 bg-white/20"></div>
                                    </div>
                                </Link>
                            </motion.button>
                            <motion.button
                                className="group relative inline-flex h-12 items-center border-none justify-center overflow-hidden rounded-full bg-slate-800 px-6 font-medium text-neutral-200 transition hover:scale-110"
                                initial="hidden"
                                animate="visible"
                                variants={buttonVariants}
                            >
                                <span>Browse the Collection</span>
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                    <div className="relative h-full w-8 bg-white/20"></div>
                                </div>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Other Divs: Hidden on small screens */}
                    <motion.div
                        className="hidden sm:block sm:col-span-4 sm:row-span-2 sm:col-start-7 bg-slate-300 rounded-xl bg-[url('../images/image9.jpg')] bg-cover bg-center shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    >
                    </motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-5 sm:col-start-7 sm:row-start-3 bg-[url('../images/20-Cozy-Room-Decor-Ideas-for-Fall-and-Winter-Beautiful-Dawn-Designs.jpg')] shadow-custom bg-cover rounded-xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    ></motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-3 sm:col-start-11 sm:row-start-1 bg-gray-800 rounded-xl bg-[url('../images/image5.jpg')] bg-cover shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    ></motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-3 sm:col-start-9 sm:row-start-5 bg-green-400 rounded-xl bg-[url('../images/image6.jpg')] bg-cover shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    >
                    </motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-4 sm:col-start-11 sm:row-start-4 bg-blue-400 rounded-xl bg-[url('../images/image7.jpg')] bg-cover bg-center shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    >
                    </motion.div>

                    <motion.div
                        className="hidden sm:block sm:col-span-2 sm:row-span-2 sm:col-start-9 sm:row-start-3 bg-yellow-200 rounded-xl bg-[url('../images/book.jpg')] bg-cover bg-center shadow-custom"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    >
                    </motion.div>
                </div>
            </div>
        </main>
    )
}
