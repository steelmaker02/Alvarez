import React from 'react';

export const Intro: React.FC = () => {
  return (
    <div className="bg-[#2B1B17]">
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative group order-2 lg:order-1 overflow-hidden rounded-sm shadow-2xl cursor-pointer">
              <img
                src="kakaopulver.jpg"
                alt="Feines Kakaopulver"
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="w-full lg:w-1/2 text-left order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#E6C8A6]"></div>
                <span className="text-[#E6C8A6] font-sans text-sm tracking-widest uppercase">Der Genuss</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0EB] mb-8 leading-tight">
                Purer Genuss <br />
                <span className="italic text-[#E6C8A6]">magische Momente.</span>
              </h2>

              <p className="font-sans text-[#F5F0EB]/90 text-lg leading-relaxed mb-8 font-light">
                Woran mag es liegen, dass wir bei einer guten Schokolade die Augen schließen?
                Die Antwort ist einfach: am puren Genuss! Mit geschlossenen Augen genießen wir den Moment,
                in dem sich der zarte Schmelz und die edlen Aromen entfalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#231612]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#E6C8A6]"></div>
                <span className="text-[#E6C8A6] font-sans text-sm tracking-widest uppercase">Das Handwerk</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0EB] mb-8 leading-tight">
                Handmade <br />
                <span className="italic text-[#E6C8A6]">in Lübeck.</span>
              </h2>

              <p className="font-sans text-[#F5F0EB]/90 text-lg leading-relaxed mb-8 font-light">
                Diese einmaligen Momente kreiert Alvarez mit höchster Chocolatier-Kunst.
                Seit über 100 Jahren produziert unsere Manufaktur nach alten Familienrezepten
                edelste Schokoladen und Pralinenspezialitäten.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <h4 className="font-serif text-3xl text-[#E6C8A6] mb-2">175</h4>
                  <p className="font-sans text-sm text-[#F5F0EB]/70 uppercase tracking-wider">Jahre Tradition</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl text-[#E6C8A6] mb-2">100%</h4>
                  <p className="font-sans text-sm text-[#F5F0EB]/70 uppercase tracking-wider">Handmade</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-sm shadow-2xl cursor-pointer">
              <img
                src="konditorin.jpg"
                alt="Chocolatier bei der Arbeit"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};