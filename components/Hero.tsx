import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    // h-screen -> Занимает весь экран пользователя
    // max-h-[1080px] -> Ограничение высоты для огромных мониторов
    // min-h-[600px] -> Минимальная высота для маленьких экранов
    <section id="home" className="relative w-full overflow-hidden bg-[#2B1B17] h-screen max-h-[1080px] min-h-[600px]">

      {/* --- ВИДЕО ФОН --- */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-10 opacity-100"
        >
          {/* Путь без слеша в начале */}
          <source src="schokolade-fluessig.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Затемнение фона (градиент), чтобы текст читался лучше */}
        <div className="absolute inset-0 bg-[#2B1B17]/40 bg-gradient-to-b from-[#2B1B17]/30 via-transparent to-[#2B1B17]/90 z-20"></div>
      </div>

      {/* --- КОНТЕНТ (ТЕКСТ) --- */}
      <div className="relative h-full container mx-auto px-6 flex flex-col items-center justify-center text-center z-30 pt-20">

        {/* 
            ИСПРАВЛЕНО: text-white 
            Теперь этот текст идеально белый и четкий.
        */}
        <h2 className="font-sans text-white text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6 animate-fade-in-up">
          Handmade in Lübeck since 1850
        </h2>

        {/* Основной заголовок */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F5F0EB] leading-tight mb-8 drop-shadow-lg max-w-5xl animate-fade-in-up delay-100">
          Edle Spezialitäten <br />
          {/* 
             ИСПРАВЛЕНО: text-[#E6C8A6]
             Я заменил темный медный на "Светлое золото". 
             Он намного лучше виден на темном фоне, чем старый цвет.
          */}
          <span className="italic text-[#E6C8A6]">aus aller Welt</span>
        </h1>

        <a
          href="#neuheiten"
          /* 
             ИСПРАВЛЕНО: border-[#E6C8A6] и hover:bg-[#E6C8A6]
             Кнопка теперь тоже светло-золотая, чтобы сочетаться с текстом.
          */
          className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-sans font-medium tracking-tighter text-[#F5F0EB] transition duration-300 ease-out border border-[#E6C8A6] rounded-sm hover:bg-[#E6C8A6] animate-fade-in-up delay-200"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="relative tracking-widest uppercase text-sm">Entdecken</span>
        </a>
      </div>

      {/* Индикатор скролла */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <ArrowDown className="text-[#F5F0EB]/50" size={32} />
      </div>
    </section>
  );
};