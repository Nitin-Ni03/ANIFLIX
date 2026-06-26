import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                ANI <span className="text-orange-500">FLIX</span>
              </span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a
                href="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-semibold text-gray-900"
              >
                Home
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                About Us
              </a>
              {/* <a href="/services" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-gray-500 hover:text-gray-700">
                Services
              </a>
              <a href="/pentakuhl" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-gray-500 hover:text-gray-700">
                ANIFLIX
              </a> */}
              <a
                href="/contact"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/sign-in"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-sm"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon */}
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-b border-gray-100`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1 px-4">
          <a
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-semibold text-gray-900 bg-orange-50"
          >
            Home
          </a>
          <a
            href="/about"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-gray-300 text-base font-medium text-gray-500 hover:text-gray-700"
          >
            About Us
          </a>
          {/* <a href="/services" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-gray-300 text-base font-medium text-gray-500 hover:text-gray-700">
            Services
          </a>
          <a href="/pentakuhl" className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-gray-300 text-base font-medium text-gray-500 hover:text-gray-700">
            ANIFLIX
          </a> */}
          <a
            href="/contact"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-gray-300 text-base font-medium text-gray-500 hover:text-gray-700"
          >
            Contact
          </a>
          <div className="pt-4 pb-2 border-t border-gray-200">
            <a
              href="/sign-in"
              className="block w-full text-center px-4 py-2 border border-transparent text-base font-semibold rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
