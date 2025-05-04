import { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#howitworks' },
    { label: 'Demo', href: '#demo' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-teal-500">
            MyLogo
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outlined">Login</Button>
            </Link>

            <Link to="/signup">
              <Button variant="filled">Signup</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none hover:cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          <div className="space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col space-y-2">
            <Link to="/login">
                <Button variant="outlined">Login</Button>
              </Link>

              <Link to="/signup">
                <Button variant="filled">Signup</Button>
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
