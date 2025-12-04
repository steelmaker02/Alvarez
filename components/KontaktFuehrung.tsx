import React, { useEffect } from 'react';

export const KontaktFuehrung: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F5F0EB] min-h-screen pt-32 pb-20 text-[#2B1B17]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="font-serif text-4xl md:text-5xl mb-10 text-[#2B1B17]">Kontakt & Führung</h1>

                {/* Текстовая часть */}
                <div className="font-sans text-lg leading-relaxed space-y-6 mb-12 opacity-90">
                    <p>
                        Sie wollen unsere Produktion kennenlernen und in die Geheimnisse der hohen Chocolatier-Kunst eingeweiht werden?
                        Besuchen Sie unser Werk und unseren Schokoshop. Alvarez bietet Führungen für Gruppen unterschiedlicher Ausrichtung an,
                        für Kindergärten, Schulgruppen, Familien und interessierte Erwachsene.
                    </p>
                    <p>
                        In Seminaren und Workshops erfahren Sie alles, was eine gute Schokolade ausmacht und wie man selbst köstliche Pralinen herstellt.
                        Firmen stellen wir unsere Räumlichkeiten für außergewöhnliche Feiern und Tagungen zur Verfügung.
                    </p>

                    <div className="bg-white/50 border-l-4 border-[#C68E66] p-6 mt-8">
                        <p className="font-bold">Melden Sie sich an:</p>
                        <p>Roswitha Sommer</p>
                        <p>Telefon: (+49) 0451 123456</p>
                        <p>E-Mail: <a href="mailto:rsommer@alvarez-chocolat.de" className="text-[#C68E66] hover:underline">rsommer@alvarez-chocolat.de</a></p>
                    </div>
                </div>

                <hr className="border-[#C68E66]/20 my-12" />

                {/* Форма */}
                <form className="space-y-8 bg-white p-8 md:p-12 rounded-sm shadow-sm border border-[#2B1B17]/5">
                    <h2 className="font-serif text-2xl mb-6">Anmeldung zur Führung</h2>

                    {/* Дата и Кол-во */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-bold uppercase tracking-wide mb-2 text-[#C68E66]">Wunschtermin</label>
                            <input type="date" className="p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none bg-[#F5F0EB]/30" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold uppercase tracking-wide mb-2 text-[#C68E66]">Personenanzahl</label>
                            <select className="p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none bg-[#F5F0EB]/30">
                                <option>Bitte wählen...</option>
                                <option>1-5</option>
                                <option>6-15</option>
                                <option>16-30</option>
                                <option>Größere Gruppe</option>
                            </select>
                        </div>
                    </div>

                    {/* Адрес */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Name" className="p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none" />
                        <input type="text" placeholder="Vorname" className="p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none" />
                    </div>

                    <input type="text" placeholder="Straße / Hausnummer" className="w-full p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input type="text" placeholder="PLZ / Ort" className="md:col-span-1 p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none" />
                        <input type="tel" placeholder="Telefon" className="md:col-span-1 p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none" />
                        <input type="email" placeholder="E-Mail" className="md:col-span-1 p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none" />
                    </div>

                    {/* Чекбокс рассылки */}
                    <div className="flex items-start gap-3 mt-4">
                        <input type="checkbox" id="newsletter" className="mt-1 accent-[#C68E66]" />
                        <label htmlFor="newsletter" className="text-sm text-[#2B1B17]/80">
                            Ich bin an weiteren Informationen interessiert. Bitte nehmen Sie mich in Ihren Infoverteiler auf.
                        </label>
                    </div>

                    {/* Интересы */}
                    <div className="space-y-3 mt-6">
                        <p className="font-bold mb-2">Ich interessiere mich für: (Bitte ankreuzen)</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="accent-[#C68E66]" /> Firmenfeiern
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="accent-[#C68E66]" /> Führungen
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="accent-[#C68E66]" /> Workshops & Seminare
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="accent-[#C68E66]" /> Tagungen
                            </label>
                        </div>
                    </div>

                    {/* Кнопки */}
                    <div className="flex gap-4 pt-6">
                        <button type="reset" className="px-6 py-3 border border-[#2B1B17] text-[#2B1B17] hover:bg-[#2B1B17]/5 transition-colors uppercase text-sm tracking-widest">
                            Zurücksetzen
                        </button>
                        <button type="button" className="px-8 py-3 bg-[#2B1B17] text-[#F5F0EB] hover:bg-[#C68E66] transition-colors uppercase text-sm tracking-widest">
                            Absenden
                        </button>
                    </div>

                    <p className="text-sm italic text-[#C68E66] mt-4">Wir beraten Sie gerne!</p>
                </form>
            </div>
        </div>
    );
};