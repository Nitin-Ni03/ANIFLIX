import { Link } from 'react-router-dom';

const Footer = () => {
  const genres = ['Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Shonen', 'Shoujo', 'Slice of Life', 'Isekai', 'Drama', 'Mystery'];
  
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wider">
              ANI <span className="text-orange-500">FLIX</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              Your ultimate destination for streaming high-quality anime. Watch thousands of episodes, movies, and exclusive content anywhere, anytime.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-orange-400 border border-slate-800">
                What a Drag!! ☁️
              </span>
            </div>
          </div>

          {/* Genres */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Popular Genres</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {genres.map((genre) => (
                <a key={genre} href="#" className="hover:text-orange-500 transition-colors">
                  {genre}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
              <li><Link to="/sign-in" className="hover:text-orange-500 transition-colors">Sign In</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="tel:000-800-919-1743" className="hover:text-orange-500 transition-colors">000-800-919-1743 (Toll-Free)</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>&copy; {new Date().getFullYear()} ANIFLIX India. All rights reserved. Created for anime fans worldwide.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-orange-500 transition-colors">Discord</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-orange-500 transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
