import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

type ViewState = 'home' | 'datenschutz' | 'impressum' | 'agb' | 'kontakt-fuehrung';

interface FooterProps {
  onNavigate: (page: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="footer" className="bg-[#1A110E] text-[#F5F0EB] pt-20 pb-10 border-t border-[#F5F0EB]/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          <div className="space-y-6">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="block">
              <img
                src="logo.png"
                alt="Alvarez Chocolat"
                className="h-12 md:h-16 w-auto object-contain opacity-100 hover:opacity-90 transition-opacity"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <p className="font-sans text-base text-[#F5F0EB]/80 leading-relaxed max-w-xs">
              Handgemachte Premium-Schokolade aus Lübeck.
              Leidenschaft für Perfektion seit 1850.
            </p>

            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#F5F0EB]/80 hover:text-[#C68E66] transition-colors"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#F5F0EB]/80 hover:text-[#C68E66] transition-colors"
              >
                <Facebook size={22} />
              </a>
              <a
                href="mailto:info@alvarez-chocolat.de"
                aria-label="E-Mail senden"
                className="text-[#F5F0EB]/80 hover:text-[#C68E66] transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl text-[#F5F0EB] mb-6">Entdecken</h4>
            <ul className="space-y-4 font-sans text-base text-[#F5F0EB]/80">
              <li>
                <a href="#history" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => document.getElementById('history')?.scrollIntoView(), 100); }} className="hover:text-[#C68E66] transition-colors">
                  Unsere Geschichte
                </a>
              </li>
              <li><a href="#" className="hover:text-[#C68E66] transition-colors">Manufaktur</a></li>
              <li><a href="#" className="hover:text-[#C68E66] transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-[#C68E66] transition-colors">Presse</a></li>
              <li>
                <button onClick={() => onNavigate('kontakt-fuehrung')} className="hover:text-[#C68E66] transition-colors text-left">
                  Führungen & Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-[#F5F0EB] mb-6">Kontakt</h4>
            <address className="not-italic font-sans text-base text-[#F5F0EB]/80 space-y-4">
              <p>Mahlerweg 12<br />23552 Lübeck<br />Deutschland</p>
              <p>
                <a href="tel:+490451123456" className="hover:text-[#C68E66] transition-colors">(+49) 0451 123456</a><br />
                <a href="mailto:info@alvarez-chocolat.de" className="hover:text-[#C68E66] transition-colors">info@alvarez-chocolat.de</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#F5F0EB]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#F5F0EB]/60 font-sans">
          <div className="text-center md:text-left">
            <p>&copy; 2025 Alvarez Chocolat AG. Alle Rechte vorbehalten.</p>
            <p className="mt-1">Geschäftsführung: Henry Hübchen</p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('impressum')} className="hover:text-white transition-colors">Impressum</button>
            <button onClick={() => onNavigate('datenschutz')} className="hover:text-white transition-colors">Datenschutz</button>
            <button onClick={() => onNavigate('agb')} className="hover:text-white transition-colors">AGB</button>
          </div>
        </div>
      </div>
    </footer>
  );
};