import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCloseFill, RiMenu3Fill } from '@remixicon/react';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/BetCalculator', label: 'BetSmart Calculator' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-gray-900/40 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-green-400 font-semibold text-3xl font-serif">
          <Link to="/">BetSmart</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className="text-white hover:text-gray-400 transition duration-300"
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden p-2 bg-gray-900/50 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
          {LINKS.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className="text-white hover:text-gray-400 transition duration-300"
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;