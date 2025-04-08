
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mountain-950 text-white">
      <div className="content-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Pahadi Traveller</h3>
            <p className="text-gray-300 mb-4">
              Showcasing the true beauty of Uttarakhand through immersive travel blogs and captivating visuals.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Popular destinations */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              <li><Link to="/destinations/rishikesh" className="text-gray-300 hover:text-white transition-colors">Rishikesh</Link></li>
              <li><Link to="/destinations/nainital" className="text-gray-300 hover:text-white transition-colors">Nainital</Link></li>
              <li><Link to="/destinations/mussoorie" className="text-gray-300 hover:text-white transition-colors">Mussoorie</Link></li>
              <li><Link to="/destinations/auli" className="text-gray-300 hover:text-white transition-colors">Auli</Link></li>
              <li><Link to="/destinations/valley-of-flowers" className="text-gray-300 hover:text-white transition-colors">Valley of Flowers</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-forest-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Satpuli, Uttarakhand, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-forest-400 flex-shrink-0" />
                <a href="mailto:info@himalayanwanderlust.com" className="text-gray-300 hover:text-white transition-colors">
                info@pahaditravellerlust.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-forest-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                  +91 8755743400
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Pahadi Traveller. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
