import React from 'react';

export const History: React.FC = () => {
  return (
    <section id="history" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center grayscale sepia-[.3] contrast-125 brightness-50"
        style={{
          backgroundImage: "url('kakao-stich-alt.jpg')"
        }}
      ></div>

      <div className="absolute inset-0 bg-[#2B1B17]/85 mix-blend-multiply"></div>

      <div className="container relative mx-auto px-6 md:px-12 text-center z-10">
        <div className="max-w-3xl mx-auto border border-[#E6C8A6]/30 p-12 md:p-20 bg-[#2B1B17]/60 backdrop-blur-md shadow-2xl">

          <span className="text-[#E6C8A6] font-sans text-sm tracking-[0.4em] uppercase mb-6 block">Unsere Geschichte</span>

          <h2 className="font-serif text-4xl md:text-6xl text-[#F5F0EB] mb-8">
            Est. 1850
          </h2>

          <p className="font-serif text-xl md:text-2xl italic text-[#F5F0EB]/90 mb-10 leading-relaxed">
            "Exklusive Schokoladenspezialitäten nach den Grundrezepturen von Antonio Alvarez."
          </p>

          <div className="font-sans text-[#F5F0EB]/90 text-base md:text-lg font-light leading-loose space-y-4">
            <p>
              Die Geschichte beginnt mit dem Entschluss des Lübecker Konditors Johann Köster in seiner kleinen Konditorei in der Altstadt Lübecks, nach einer neuen Methode Schokolade herzustellen.
            </p>
            <p>
              Er verwendete dazu edelste Kakaosorten des Spaniers Antonio Alvarez, die dieser per Schiff aus Südamerika in das Handelskontor nach Lübeck brachte. Heute, im Jahr 2025, führen wir diese Tradition fort.
            </p>
          </div>

          <div className="mt-12">
            <div className="font-serif text-3xl text-[#E6C8A6] opacity-90 -rotate-6">
              Antonio Alvarez
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};