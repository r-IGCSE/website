"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Header = () => {
  const [menu, setMenu] = useState(false)
  const links = [
    { name:'Home', href:'/' },
    { name:'Resources', href:'/resources' },
    { name:'About', href:'/about' },
    { name:'Team', href:'/team' },
    { name:'Certificates', href:'/certificates' },
    { name:'Partners', href:'/partners' },
    { name:'Discord', href:'/discord' },
    { name:'Reddit', href:'/reddit' }
  ]

  useEffect(() => {
    const resize = () => {
        if (window.innerWidth >= 1024 && menu) {
            setMenu(false);
        }
    }
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  },[menu])

  return (
    <header className="w-full flex flex-col fixed bg-background z-50 top-0">
        <div className="flex flex-row justify-between p-4">
            <div className="flex flex-row">
                <div className="flex items-center gap-1">
                    <Image src="/assets/logo.png" alt="r/igcse" width={25} height={25}/>
                    <h1 className="font-semibold pr-12 text-xl">r/IGCSE</h1>
                </div>
                <nav className="hidden lg:block">
                    <div className="grow">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                            {links.map((link) => (
                                <Link key={link.name} href={link.href} className="hover:text-primary-500 transition-colors duration-150">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
            <Link key="login" className="hidden lg:block hover:text-primary-500 transition-colors duration-150" href="/login">Login</Link>
            <button className="p-2 text-lg hover:cursor-pointer hover:text-primary-500 transition-colors duration-150 lg:hidden" onClick={() => setMenu(!menu)}>☰</button>    
        </div> 
            {
                menu && (
                    <nav className="lg:hidden p-4 pt-0">
                        <div className="flex flex-col justify-center items-start">
                            {links.map((link) => (
                                <Link key={link.name} href={link.href} className="my-2 hover:text-primary-500 transition-colors duration-150">
                                    {link.name}
                                </Link>
                            ))}
                            <Link className="hover:text-primary-500 mt-2 transition-colors duration-150" key="login" href="/login">Login</Link>
                        </div>
                    </nav>
                )
            }
    </header>
  )
}

export default Header