'use client'
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='container mx-auto bg-gradient-to-br from-amber-200 via-amber-100 to-amber-50'
    >
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Text Content */}
        <motion.div
          className='w-full h-screen text-orange-900'
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className='flex flex-col w-full h-full justify-center items-start'>
            <div className='mx-auto space-y-8 p-12'>
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='text-4xl font-bold'
              >
                MyCoffee - Enjoy Premium Coffee in Every Sip
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Discover a better coffee experience with MyCoffee. We source the finest beans from top farms, roasted to perfection for a rich and satisfying taste.
              </motion.p>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href={'/menu'}
                  className="bg-orange-800 hover:bg-orange-900 rounded-md text-white font-semibold p-3 block w-fit"
                >
                  Let's Explore!
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className='w-full h-screen hidden md:block'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className='flex flex-col w-full h-full justify-center items-center'>
            <motion.img
              src="./images/americano-mycoffe.jpg"
              alt="mycoffe-landing"
              className='rounded-full w-86 h-96 object-cover shadow-xl'
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}