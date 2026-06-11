"use client"

import Image from "next/image";
import Navbar from "./navbar";
import { useState } from "react";
import styles from "./header.module.css"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="z-20 sticky top-0 flex flex-row items-center justify-between px-6 py-4 min-w-full bg-background">
        <div className="flex flex-row items-center gap-4 font-bold">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          r/IGCSE
        </div>
        <div className="not-md:hidden">
          <Navbar/>
        </div>
        <div>
          <button className="md:hidden transition-colors hover:text-primary-500 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div> {/* div to center the navbar */}
      </div>
      <div className={`${isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'} bg-black inset-0 fixed transition-all duration-300`} onClick={() => setIsOpen(false)}></div>
      <div className={`top-15 p-4 fixed w-full bg-background z-10 md:hidden ${isOpen ? styles.open : styles.dropdown}`}>
        <Navbar/>
      </div>
      {/* <AnimatePresence>
        {
          isOpen && (
            <>
              <motion.div 
                initial={{ opacity:0 }}
                animate={{ opacity:0.5 }}
                exit={{ opacity:0 }}
                transition={{ duration:0.15 }}
                className="fixed inset-0 bg-black md:hidden"
                onClick={() => setIsOpen(false)}
              >
              </motion.div>
              <motion.div
                initial={{ y:'-100%' }}
                animate={{ y:0 }}
                exit={{ y:'-100%' }}
                transition={{ duration:0.15 }}
                className="top-15 p-4 fixed w-full bg-background z-10 md:hidden"
              >
                <Navbar/>
              </motion.div>
            </>
          )
        }
      </AnimatePresence> */}
    </>
  );
}
