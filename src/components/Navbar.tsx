
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm opacity-80">
      <div className="content-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">            
            <span className="text-2xl font-heading font-bold text-forest-800">Pahadi Traveller</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-forest-700 hover:text-forest-900 transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="font-medium text-forest-700 hover:text-forest-900 transition-colors">
              Destinations
            </Link>
            <Link to="/blog" className="font-medium text-forest-700 hover:text-forest-900 transition-colors">
              Blog
            </Link>
            <Link to="/about" className="font-medium text-forest-700 hover:text-forest-900 transition-colors">
              About
            </Link>
            <Button className="bg-forest-700 hover:bg-forest-800">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="px-4 py-2 text-forest-700 hover:bg-forest-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/destinations" 
                className="px-4 py-2 text-forest-700 hover:bg-forest-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link 
                to="/blog" 
                className="px-4 py-2 text-forest-700 hover:bg-forest-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-forest-700 hover:bg-forest-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-forest-700 hover:bg-forest-800">Contact</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
