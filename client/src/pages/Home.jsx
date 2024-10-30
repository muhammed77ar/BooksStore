import { motion } from "framer-motion";

const DUCK_IMG =
  "https://images.pexels.com/photos/1837168/pexels-photo-1837168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

export default function Home() {
    return (
      <main className="h-screen overflow-hidden bg-neutral-900">  
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex justify-center mt-12 w-full">
          <img src={DUCK_IMG} alt="Duck" className="h-[700px] pointer-events-none" />
        </motion.div>
      </main>
    );
}
