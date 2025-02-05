"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Section01() {
  return (
    <>
      {/* Main Section */}
      <div className="w-[90%] h-auto lg:h-[680px] bg-[#F0F2F3] mx-auto grid grid-cols-1 md:grid-cols-2 rounded-bl-3xl">
        {/* Left Content */}
        <motion.div 
          className="px-6 md:pl-28 md:my-auto py-8 text-[#272343] font-sans font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="mx-8 md:mx-0 text-lg font-medium uppercase tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            WELCOME TO CHAIRY
          </motion.h3>
          <motion.h1 
            className="font-bold text-3xl md:text-[50px] my-4 leading-tight mx-8 md:mx-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Best Furniture Collection For Your Interior
          </motion.h1>
          <Link href="/product">
            <motion.button 
              className="w-full max-w-[171px] h-[52px] bg-[#029FAE] text-white rounded-lg mt-4 mx-8 md:mx-0 hover:bg-[#027c88] transition-all duration-300 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="mx-auto my-auto w-full max-w-[434px] h-auto overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/Product Image.png"
            alt="chair"
            height={584}
            width={434}
            className="transition-transform duration-300"
          />
        </motion.div>
      </div>
    </>
  );
}
