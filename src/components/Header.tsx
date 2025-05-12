
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <span className="mr-2">🏫</span>
          EduManager
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-secondary transition-colors">
            Accueil
          </Link>
          <Link to="/index" className="text-white hover:text-secondary transition-colors">
            Établissements
          </Link>
          <Link to="/about" className="text-white hover:text-secondary transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="text-white hover:text-secondary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
