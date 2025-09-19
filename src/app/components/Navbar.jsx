"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-200 shadow">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto sm:px-6 lg:px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-900">MyApp</h1>

        {/* Desktop Links */}
        <div className="hidden space-x-6 font-medium md:flex">
          <Link href="/" className="transition hover:text-blue-700">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-blue-700">
            About
          </Link>
          <Link href="/course" className="transition hover:text-blue-700">
            Course
          </Link>
          <Link href="/login" className="transition hover:text-blue-700">
            Login
          </Link>
          <Link href="/signin" className="transition hover:text-blue-700">
            Sign In
          </Link>
          <Link href="/contact" className="transition hover:text-blue-700">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-blue-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="px-4 py-4 space-y-3 font-medium bg-blue-100 md:hidden">
          <Link
            href="/"
            className="block transition hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block transition hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/course"
            className="block transition hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Course
          </Link>
          <Link
            href="/login"
            className="block transition hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/signin"
            className="block transition hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/contact"
            className="block transition hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
