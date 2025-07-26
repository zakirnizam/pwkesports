import { MessageSquare, Instagram } from 'lucide-react';
import pwkLogo from '../images/pwklogo.jpg';
import ImageWithFallback from './ImageWithFallback';

const phoneNumber = "919037122605";
const message = "Hi! I’m an active eFootball player looking to join a competitive clan. Is PWK eSports recruiting new players?";
const encodedMessage = encodeURIComponent(message);
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;



const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              {/* Clan Logo */}
              <div className="w-10 h-10 bg-gray-800 border-2 border-emerald-400 rounded-lg flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={pwkLogo} 
                  alt="PWK Esports Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">PWK Esports</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Champions of the Virtual Pitch. Join the most competitive eFootball esports clan and dominate the digital leagues.
            </p>
            <div className="flex space-x-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/pwkesports" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='scroll-smooth'>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">About</a></li>
              <li><a href="#achievements" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Achievements</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Team</a></li>
              <li><a href="#rankings" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Rankings</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Join Us</a></li>
              <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">WhatsApp Group</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm">
                <p className="font-medium text-white">Instagram</p>
                <p>@pwkesports</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="font-medium text-white">Recruitment</p>
                <p>Opens Soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm">
              © 2025 PWK Esports. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Developed by <a href="https://www.instagram.com/17.n1z4m" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Nizam</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;