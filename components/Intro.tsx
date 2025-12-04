import React from 'react';

export const Intro: React.FC = () => {
  return (
    <div className="bg-[#2B1B17]">
      {/* Section 1: The Taste (Intro) */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Image Side - Texture (Kakaopulver) */}
            <div className="w-full lg:w-1/2 relative group order-2 lg:order-1">
              {/* Рамка остается чуть темнее для стиля (#C68E66) */}
              <div className="absolute top-4 -left-4 w-full h-full border border-[#C68E66]/30 z-0 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative z-10 overflow-hidden rounded-sm shadow-xl">
                <img
                  src="kakaopulver.jpg"
                  alt="Feines Kakaopulver"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 text-left order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                {/* ИСПРАВЛЕНО: Светлое золото #E6C8A6 */}
                <div className="h-px w-12 bg-[#E6C8A6]"></div>
                <span className="text-[#E6C8A6] font-sans text-sm tracking-widest uppercase">Der Genuss</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0EB] mb-8 leading-tight">
                Purer Genuss <br />
                {/* ИСПРАВЛЕНО: Светлое золото #E6C8A6 */}
                <span className="italic text-[#E6C8A6]">magische Momente.</span>
              </h2>

              {/* ИСПРАВЛЕНО: opacity-90 для лучшей читаемости */}
              <p className="font-sans text-[#F5F0EB]/90 text-lg leading-relaxed mb-8 font-light">
                Woran mag es liegen, dass wir bei einer guten Schokolade die Augen schließen?
                Die Antwort ist einfach: am puren Genuss! Mit geschlossenen Augen genießen wir den Moment,
                in dem sich der zarte Schmelz und die edlen Aromen entfalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Craftsmanship (Production) */}
      <section className="py-24 bg-[#231612]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Text Side */}
            <div className="w-full lg:w-1/2 text-left">
              <div className="flex items-center gap-4 mb-6">
                {/* ИСПРАВЛЕНО: Светлое золото #E6C8A6 */}
                <div className="h-px w-12 bg-[#E6C8A6]"></div>
                <span className="text-[#E6C8A6] font-sans text-sm tracking-widest uppercase">Das Handwerk</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0EB] mb-8 leading-tight">
                Handmade <br />
                {/* ИСПРАВЛЕНО: Светлое золото #E6C8A6 */}
                <span className="italic text-[#E6C8A6]">in Lübeck.</span>
              </h2>

              {/* ИСПРАВЛЕНО: opacity-90 */}
              <p className="font-sans text-[#F5F0EB]/90 text-lg leading-relaxed mb-8 font-light">
                Diese einmaligen Momente kreiert Alvarez mit höchster Chocolatier-Kunst.
                Seit über 100 Jahren produziert unsere Manufaktur nach alten Familienrezepten
                edelste Schokoladen und Pralinenspezialitäten.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  {/* ИСПРАВЛЕНО: Светлое золото #E6C8A6 */}
                  <h4 className="font-serif text-3xl text-[#E6C8A6] mb-2">175</h4>
                  <p className="font-sans text-sm text-[#F5F0EB]/70 uppercase tracking-wider">Jahre Tradition</p>
                </div>
                <div>
                  {/* ИСПРАВЛЕНО: Светлое золото #E6C8A6 */}
                  <h4 className="font-serif text-3xl text-[#E6C8A6] mb-2">100%</h4>
                  <p className="font-sans text-sm text-[#F5F0EB]/70 uppercase tracking-wider">Handmade</p>
                </div>
              </div>
            </div>

            {/* Image Side - Chocolatier (Konditorin) */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C68E66]/30 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative z-10 overflow-hidden rounded-sm shadow-xl aspect-[4/3]">
                <img
                  src="konditorin.jpg"
                  alt="Chocolatier bei der Arbeit"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};