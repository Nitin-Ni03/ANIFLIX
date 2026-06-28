import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-900 z-50 transition-all duration-300 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight">
                ANI <span className="text-orange-500">FLIX</span>
              </span>
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold transition-all ${
                  isActive("/")
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-slate-300 hover:text-white hover:border-slate-700"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold transition-all ${
                  isActive("/about")
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-slate-300 hover:text-white hover:border-slate-700"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold transition-all ${
                  isActive("/contact")
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-slate-300 hover:text-white hover:border-slate-700"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/sign-in"
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-bold rounded-xl text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-500/10 active:scale-[0.98]"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
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
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-slate-950 border-b border-slate-900`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-4 space-y-1 px-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-semibold ${
              isActive("/")
                ? "border-orange-500 text-orange-500 bg-orange-500/5"
                : "border-transparent text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-semibold ${
              isActive("/about")
                ? "border-orange-500 text-orange-500 bg-orange-500/5"
                : "border-transparent text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-semibold ${
              isActive("/contact")
                ? "border-orange-500 text-orange-500 bg-orange-500/5"
                : "border-transparent text-slate-300 hover:text-white hover:bg-slate-900"
            }`}
          >
            Contact
          </Link>
          <div className="pt-4 pb-2 border-t border-slate-900">
            <Link
              to="/sign-in"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 border border-transparent text-base font-bold rounded-xl text-white bg-orange-500 hover:bg-orange-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
