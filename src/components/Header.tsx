import { useState } from 'react';
import { Menu, X, Trophy, Users, BarChart3, Info, Phone, Medal } from 'lucide-react';
import pwkLogo from '../images/pwklogo.jpg';
import ImageWithFallback from './ImageWithFallback';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: Trophy },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Achievements', href: '#achievements', icon: Medal },
    { name: 'Team', href: '#team', icon: Users },
    { name: 'Rankings', href: '#rankings', icon: BarChart3 },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-800 border-2 border-emerald-400 rounded-lg flex items-center justify-center overflow-hidden">
              <ImageWithFallback
                src={pwkLogo} 
                alt="PWK Esports Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-white">PWK Esports</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;