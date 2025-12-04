import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import { CLASSIC_PRODUCTS, EASTER_PRODUCTS, Product } from '../types';
import { useCart } from '../context/CartContext';

export const ProductCarousel: React.FC = () => {
  const [activeCollectionIndex, setActiveCollectionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const collections = [
    {
      title: "Pralinen des Jahres",
      subtitle: "Kollektion 2025",
      products: CLASSIC_PRODUCTS
    },
    {
      title: "Oster-Edition",
      subtitle: "Frühlingserwachen",
      products: EASTER_PRODUCTS
    }
  ];

  const currentCollection = collections[activeCollectionIndex];

  const switchCollection = (direction: 'next' | 'prev') => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCollectionIndex(prev => {
        if (direction === 'next') {
          return prev === collections.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? collections.length - 1 : prev - 1;
        }
      });
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="neuheiten" className="py-24 bg-[#F5F0EB] text-[#2B1B17] relative overflow-hidden min-h-[700px]">

      <div className="container mx-auto px-6 md:px-12 mb-12 flex flex-col items-center text-center">
        <div className={`mb-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {/* ИСПРАВЛЕНО: text-[#784830] - Темная медь (Проходит тест контрастности) */}
          <span className="text-[#784830] font-sans text-sm tracking-[0.2em] uppercase mb-3 block">
            {currentCollection.subtitle}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#2B1B17]">
            {currentCollection.title}
          </h2>
        </div>

        <div className="flex space-x-6">
          <button
            onClick={() => switchCollection('prev')}
            aria-label="Vorherige Kollektion"
            className="w-12 h-12 rounded-full border border-[#2B1B17]/20 flex items-center justify-center hover:bg-[#2B1B17] hover:text-[#F5F0EB] transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {collections.map((_, idx) => (
              <div
                key={idx}
                // ИСПРАВЛЕНО: bg-[#784830]
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeCollectionIndex ? 'bg-[#784830] w-4' : 'bg-[#2B1B17]/20'}`}
              ></div>
            ))}
          </div>

          <button
            onClick={() => switchCollection('next')}
            aria-label="Nächste Kollektion"
            className="w-12 h-12 rounded-full border border-[#2B1B17]/20 flex items-center justify-center hover:bg-[#2B1B17] hover:text-[#F5F0EB] transition-all duration-300"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className={`container mx-auto px-6 md:px-12 transition-all duration-500 ease-in-out transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="flex flex-wrap justify-center gap-8">
          {currentCollection.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="relative group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-2rem)] min-w-[240px] max-w-[300px] flex flex-col">
      {/* ИСПРАВЛЕНО: border-[#784830]/20 */}
      <div className="relative aspect-[4/5] bg-[#784830]/5 rounded-sm overflow-hidden mb-5 shadow-sm border border-[#784830]/20">
        <img
          src={product.imageDefault}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-105"
        />
        <img
          src={product.imageHover}
          alt={`${product.name} inside`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 flex justify-end">
          <button
            onClick={handleAdd}
            aria-label="In den Warenkorb"
            // ИСПРАВЛЕНО: hover:bg-[#784830]
            className="w-12 h-12 bg-[#F5F0EB] text-[#2B1B17] rounded-full flex items-center justify-center shadow-lg hover:bg-[#784830] hover:text-white transition-colors duration-300"
          >
            <Plus size={22} />
          </button>
        </div>
      </div>

      <div className="text-left pr-0">
        <h3 className="font-serif text-xl md:text-2xl text-[#2B1B17] mb-2 leading-tight">{product.name}</h3>
        <p className="font-sans text-[#2B1B17]/80 text-sm md:text-base leading-relaxed min-h-[48px] line-clamp-3">
          {product.description}
        </p>

        <div className="mt-4 pt-3 border-t border-[#2B1B17]/10 flex justify-between items-baseline">
          {/* ИСПРАВЛЕНО: text-[#784830] */}
          <span className="font-sans text-[#784830] font-medium text-lg md:text-xl">{product.price}</span>
          <span className="text-xs text-[#2B1B17]/75 font-normal uppercase tracking-wider">/ Stück</span>
        </div>
      </div>
    </div>
  );
};