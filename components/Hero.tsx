import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#2B1B17] h-screen max-h-[1080px] min-h-[600px]">

      <div className="absolute inset-0 w-full h-full">

        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-10 opacity-100"
        >
          <source src="schokolade-fluessig.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-20"></div>
      </div>

      <div className="relative h-full container mx-auto px-6 flex flex-col items-center justify-center text-center z-30 pt-20">

        <h2 className="font-sans text-white text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6 animate-fade-in-up">
          Handmade in Lübeck since 1850
        </h2>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F5F0EB] leading-tight mb-8 drop-shadow-lg max-w-5xl animate-fade-in-up delay-100">
          Edle Spezialitäten <br />
          <span className="italic text-[#C68E66]/80">aus aller Welt</span>
        </h1>

        <a
          href="#neuheiten"
          className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-sans font-medium tracking-tighter text-[#F5F0EB] transition duration-300 ease-out border border-[#C68E66] rounded-sm hover:bg-[#C68E66] animate-fade-in-up delay-200"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="relative tracking-widest uppercase text-sm">Entdecken</span>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <ArrowDown className="text-[#F5F0EB]/50" size={32} />
      </div>
    </section>
  );
};