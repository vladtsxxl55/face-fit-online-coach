
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">FG</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Face Gymnastics</h1>
              <p className="text-xs text-rose-500">Онлайн программа</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-rose-500 transition-colors">О программе</a>
            <a href="#benefits" className="text-gray-700 hover:text-rose-500 transition-colors">Преимущества</a>
            <a href="#reviews" className="text-gray-700 hover:text-rose-500 transition-colors">Отзывы</a>
            <a href="#pricing" className="text-gray-700 hover:text-rose-500 transition-colors">Цены</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-500 transition-colors">Контакты</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail size={16} />
              <span>info@facegym.ru</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-rose-500 transition-colors">О программе</a>
              <a href="#benefits" className="text-gray-700 hover:text-rose-500 transition-colors">Преимущества</a>
              <a href="#reviews" className="text-gray-700 hover:text-rose-500 transition-colors">Отзывы</a>
              <a href="#pricing" className="text-gray-700 hover:text-rose-500 transition-colors">Цены</a>
              <a href="#contact" className="text-gray-700 hover:text-rose-500 transition-colors">Контакты</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
