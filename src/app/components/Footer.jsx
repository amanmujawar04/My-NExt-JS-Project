import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 text-white bg-gray-800">
      <div className="container px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          {/* Footer Links */}
          <nav className="flex space-x-6">
            <a
              href="/about"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              About
            </a>
            <a
              href="/course"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Course
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
