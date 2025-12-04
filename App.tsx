import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { ProductCarousel } from './components/ProductCarousel';
import { History } from './components/History';
import { Footer } from './components/Footer';
import { Datenschutz } from './components/Datenschutz';
import { Impressum } from './components/Impressum';
import { AGB } from './components/AGB';
import { KontaktFuehrung } from './components/KontaktFuehrung';
// НОВЫЕ ИМПОРТЫ
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

export type ViewState = 'home' | 'datenschutz' | 'impressum' | 'agb' | 'kontakt-fuehrung';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderHome = () => (
    <>
      <Hero />
      <Intro />
      <ProductCarousel />
      <History />

      {/* Call to Action Section */}
      <section className="py-24 bg-[#F5F0EB] flex justify-center items-center">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">

          {/* ЛЕВАЯ ЧАСТЬ: КОРОБКА */}
          <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square bg-[#C68E66]/10 border border-[#C68E66]/20 rounded-sm relative group overflow-hidden">

            {/* 1. ЗАКРЫТАЯ КОРОБКА */}
            <img
              src="pralinenschachtel.png"
              alt="Alvarez Gift Box Closed"
              // УБРАЛ: mix-blend-multiply
              // Теперь белый цвет останется белым
              className="absolute inset-0 w-full h-full object-contain p-8 md:p-12
                drop-shadow-xl
                transition-all duration-700 ease-in-out
                opacity-100 group-hover:opacity-0
                scale-100 group-hover:scale-105"
            />

            {/* 2. ОТКРЫТАЯ КОРОБКА */}
            <img
              src="pralinenschachtel_open.png"
              alt="Alvarez Gift Box Open"
              // УБРАЛ: mix-blend-multiply
              className="absolute inset-0 w-full h-full object-contain p-8 md:p-12
                drop-shadow-xl
                transition-all duration-700 ease-in-out
                opacity-0 group-hover:opacity-100
                scale-100 group-hover:scale-105"
            />
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ТЕКСТ (Без изменений) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[#C68E66] font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
              Geschenkidee
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#2B1B17] mb-6">
              Das perfekte Geschenk
            </h2>
            <p className="font-sans text-[#2B1B17]/70 mb-8 leading-relaxed text-lg font-light">
              Überraschen Sie Ihre Liebsten mit unserer exklusiven Geschenkbox.
              Eine handverlesene Auswahl unserer besten Kreationen, elegant verpackt und bereit, Freude zu schenken.
            </p>
            <button className="bg-[#2B1B17] text-[#F5F0EB] px-10 py-4 font-sans uppercase tracking-widest text-sm hover:bg-[#C68E66] transition-colors duration-300 rounded-sm shadow-lg hover:shadow-xl">
              Jetzt Bestellen
            </button>
          </div>
        </div>
      </section>
    </>
  );

  return (
    // ОБОРАЧИВАЕМ ВСЁ В PROVDER
    <CartProvider>
      <div className="min-h-screen flex flex-col selection:bg-[#C68E66] selection:text-white">
        <Header onNavigate={setCurrentView} currentView={currentView} />

        {/* ДОБАВЛЯЕМ САМУ КОРЗИНУ */}
        <CartDrawer />

        <main className="flex-grow">
          {currentView === 'home' && renderHome()}
          {currentView === 'datenschutz' && <Datenschutz />}
          {currentView === 'impressum' && <Impressum />}
          {currentView === 'agb' && <AGB />}
          {currentView === 'kontakt-fuehrung' && <KontaktFuehrung />}
        </main>

        <Footer onNavigate={setCurrentView} />
      </div>
    </CartProvider>
  );
};

export default App;