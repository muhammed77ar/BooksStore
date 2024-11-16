import { motion } from 'framer-motion';

export default function Hero() {
// Animation Variants
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5, ease: 'easeOut' } }
};

    return (
        <main className="h-screen overflow-hidden">
            <div className=" px-6 grid grid-cols-12 grid-rows-6 h-[90%] gap-4 md:grid pb-2">
                {/* Div 1: Visible on all screen sizes */}
                <motion.div
                    className="flex flex-col gap-6 col-span-12 md:col-span-6 md:row-span-7 mt-28"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <motion.div className="font-extrabold text-6xl text-slate-700 font-gentium uppercase tracking-tighter transform scale-y-125">
                        <h1>Discover Your</h1>
                        <div className="flex items-center md:gap-3">
                            <h1>Next Favorite</h1>
                            <div>
                                <img className="w-[100px] object-cover drop-shadow-xl" src="../images/bookpng.png" alt="" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="text-slate-700" initial="hidden" animate="visible" variants={textVariants}>
                        From timeless classics to modern bestsellers, explore a world of stories, knowledge, and inspiration. Start your reading adventure today!
                    </motion.div>
                    <motion.div className="flex gap-4">
                        <motion.button
                            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-800 px-6 font-medium text-neutral-200 transition hover:scale-110"
                            initial="hidden"
                            animate="visible"
                            variants={buttonVariants}
                        >
                            <span>Shop Now</span>
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                <div className="relative h-full w-8 bg-white/20"></div>
                            </div>
                        </motion.button>
                        <motion.button
                            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-800 px-6 font-medium text-neutral-200 transition hover:scale-110"
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
                    className="hidden md:block md:col-span-4 md:row-span-2 md:col-start-7 bg-slate-300 rounded-xl bg-[url('../images/image3.jpg')] bg-cover bg-center shadow-custom"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                >
                </motion.div>

                <motion.div
                    className="hidden md:block md:col-span-2 md:row-span-5 md:col-start-7 md:row-start-3 bg-[url('../images/20-Cozy-Room-Decor-Ideas-for-Fall-and-Winter-Beautiful-Dawn-Designs.jpg')] shadow-custom bg-cover rounded-xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                ></motion.div>

                <motion.div
                    className="hidden md:block md:col-span-2 md:row-span-3 md:col-start-11 md:row-start-1 bg-gray-800 rounded-xl bg-[url('../images/image5.jpg')] bg-cover shadow-custom"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                ></motion.div>

                <motion.div
                    className="hidden md:block md:col-span-2 md:row-span-3 md:col-start-9 md:row-start-5 bg-green-400 rounded-xl bg-[url('../images/image6.jpg')] bg-cover shadow-custom"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                >
                </motion.div>

                <motion.div
                    className="hidden md:block md:col-span-2 md:row-span-4 md:col-start-11 md:row-start-4 bg-blue-400 rounded-xl bg-[url('../images/image7.jpg')] bg-cover bg-center shadow-custom"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                >
                </motion.div>

                <motion.div
                    className="hidden md:block md:col-span-2 md:row-span-2 md:col-start-9 md:row-start-3 bg-yellow-200 rounded-xl bg-[url('../images/image9.jpg')] bg-cover shadow-custom"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                >
                </motion.div>
            </div>
        </main>
    )
}
