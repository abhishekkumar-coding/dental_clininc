// src/components/Navbar.jsx
"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosCall } from "react-icons/io";


const Navbar = () => {
    const [showNav, setShowNav] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false);

    const previoScrollPos = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY
            setShowNav(previoScrollPos.current > currentPosition || currentPosition < 10)
            previoScrollPos.current = currentPosition
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        // { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav ref={previoScrollPos} className={`bg-white/55 backdrop-blur-sm shadow-md fixed top-0 left-0 w-full z-50 transform transition-all duration-100 overflow-x-hidden ${showNav ? "translate-y-0" : "-translate-y-20"}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo / Clinic Name */}
                <div className="text-blue-700 font-bold text-xl sm:text-2xl cursor-pointer">
                    <Link href={"/"}>DENTAL CLINIC</Link>

                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 font-semibold text-xl transition"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div>
                        <h1 className='flex items-center justify-center font-bold gap-2 cursor-pointer'><span className='text-2xl'><IoIosCall /></span>+91 766-819-6232</h1>
                    </div>
                    <a
                        href="/appointment"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white px-4 py-4 space-y-3 shadow">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-gray-700 font-semibold text-xl hover:text-blue-600 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div>
                        <h1 className='flex items-start font-bold gap-2 cursor-pointer'><span className='text-2xl'><IoIosCall /></span>+91 766-819-6232</h1>
                    </div>
                    <a
                        href="/appointment"
                        className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Book Appointment
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
