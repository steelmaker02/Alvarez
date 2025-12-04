import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import { PRODUCTS, Product } from '../types';
import { useCart } from '../context/CartContext'; // Импорт

export const ProductCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="neuheiten" className="py-24 bg-[#F5F0EB] text-[#2B1B17] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-10 flex flex-col items-center text-center">
        <div className="mb-6">
          <span className="text-[#C68E66] font-sans text-sm tracking-[0.2em] uppercase mb-3 block">Kollektion 2025</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2B1B17]">Pralinen des Jahres</h2>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-[#2B1B17]/20 flex items-center justify-center hover:bg-[#2B1B17] hover:text-[#F5F0EB] transition-all duration-300"><ArrowLeft size={18} /></button>
          <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-[#2B1B17]/20 flex items-center justify-center hover:bg-[#2B1B17] hover:text-[#F5F0EB] transition-all duration-300"><ArrowRight size={18} /></button>
        </div>
      </div>

      <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 no-scrollbar scroll-snap-x w-full items-start justify-start xl:justify-center" style={{ scrollSnapType: 'x mandatory' }}>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-2 max-w-4xl">
        <div className="w-full h-[1px] bg-[#2B1B17]/10 relative">
          <div className="absolute top-0 left-0 h-[2px] bg-[#C68E66] transition-all duration-300 -mt-[0.5px]" style={{ width: `${Math.max(10, scrollProgress)}%` }}></div>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart(); // Достаем функцию

  // Обработчик клика (останавливаем всплытие, чтобы не сработал клик по карточке, если он будет)
  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="relative group min-w-[240px] md:min-w-[260px] w-[260px] scroll-snap-align-center cursor-pointer flex flex-col">
      <div className="relative aspect-[4/5] bg-[#C68E66]/10 rounded-sm overflow-hidden mb-5 shadow-sm border border-[#C68E66]/20">
        <img src={product.imageDefault} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-105" />
        <img src={product.imageHover} alt={`${product.name} inside`} className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105" />

        {/* КНОПКА ДОБАВЛЕНИЯ */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 flex justify-end">
          <button
            onClick={handleAdd}
            className="w-10 h-10 bg-[#F5F0EB] text-[#2B1B17] rounded-full flex items-center justify-center shadow-lg hover:bg-[#C68E66] hover:text-white transition-colors duration-300"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="text-left pr-0">
        <h3 className="font-serif text-xl md:text-2xl text-[#2B1B17] mb-2">{product.name}</h3>
        <p className="font-sans text-[#2B1B17]/70 text-xs md:text-sm leading-relaxed min-h-[40px]">{product.description}</p>
        <div className="mt-4 pt-3 border-t border-[#2B1B17]/10 flex justify-between items-baseline">
          <span className="font-sans text-[#C68E66] font-medium text-base md:text-lg">{product.price}</span>
          <span className="text-[10px] md:text-xs text-[#2B1B17]/40 font-normal uppercase tracking-wider">/ Stück</span>
        </div>
      </div>
    </div>
  );
};