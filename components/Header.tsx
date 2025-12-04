import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

type ViewState = 'home' | 'datenschutz' | 'impressum' | 'agb' | 'kontakt-fuehrung';

interface HeaderProps {
  onNavigate: (page: ViewState) => void;
  currentView: ViewState;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    onNavigate('home');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Neuheiten', href: '#neuheiten' },
    { name: 'Alvarez', href: '#history' },
    { name: 'Kontakt', href: '#footer' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home'
        // СОСТОЯНИЕ 1: ПРИ СКРОЛЛЕ (Компактно, но аккуратно)
        ? 'bg-[#2B1B17]/95 backdrop-blur-md py-4 shadow-lg'

        // СОСТОЯНИЕ 2: НА ВЕРХУ (Просторно, избегаем выреза экрана)
        // pt-10 (40px) сверху - отодвигает лого от края
        // pb-6 (24px) снизу - балансирует вид
        : 'bg-transparent pt-10 pb-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="block">
            <img
              src="logo.png"
              alt="Alvarez Chocolat"
              className="h-10 md:h-16 w-auto object-contain transition-all duration-300"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              // ИЗМЕНЕНИЕ: md:text-base (16px на десктопах)
              className="font-sans text-sm md:text-base tracking-widest text-[#F5F0EB] hover:text-[#C68E66] transition-colors duration-300 uppercase cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* КОРЗИНА */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={openCart} className="text-[#F5F0EB] hover:text-[#C68E66] transition-colors duration-300 relative">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C68E66] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <button className="md:hidden text-[#F5F0EB]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#2B1B17] z-40 md:hidden flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-serif text-2xl text-[#F5F0EB] hover:text-[#C68E66] transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
              {link.name}
            </a>
          ))}
          {/* Корзина в мобильном меню */}
          <button onClick={() => { setIsMobileMenuOpen(false); openCart(); }} className="font-serif text-2xl text-[#C68E66] flex items-center gap-2">
            Warenkorb ({cartCount})
          </button>
        </div>
      )}
    </header>
  );
};