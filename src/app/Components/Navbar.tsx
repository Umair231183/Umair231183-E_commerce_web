"use client";
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-transparent bg-opacity-50 text-black z-20 shadow-lg mt-[10px]">
        {/* Logo */}
        <div className="relative ">
          <img 
            src={"/images/logo.jpg"} 
            alt="web_logo"
            width={50}
            height={50}
            className="rounded-t-full "
          />        
          </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="#">Home</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/Feature">About</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/Services">Services</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/Man">Man</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6 z-10 md:hidden">
          <Link href="/Hero" onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
            Home
          </Link>
          <Link href="/Feature" onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
            About
          </Link>
          <Link href="/Services" onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
            Services
          </Link>
          <Link href="/Man" onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
            Man
          </Link>
          <Link href="/Contact" onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
