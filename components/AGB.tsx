import React, { useEffect } from 'react';

export const AGB: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F5F0EB] min-h-screen pt-32 pb-20 text-[#2B1B17]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="font-serif text-4xl md:text-5xl mb-12">Allgemeine Geschäftsbedingungen (AGB)</h1>

                <div className="space-y-8 font-sans leading-relaxed opacity-90 text-base">
                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-2">1. Geltungsbereich</h2>
                        <p>
                            Für alle Bestellungen über unseren Online-Shop durch Verbraucher und Unternehmer gelten die nachfolgenden AGB.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-2">2. Vertragspartner, Vertragsschluss</h2>
                        <p>
                            Der Kaufvertrag kommt zustande mit der Alvarez Chocolat AG. Mit Einstellung der Produkte in den Online-Shop geben wir ein verbindliches Angebot zum Vertragsschluss über diese Artikel ab.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-2">3. Lieferung</h2>
                        <p>
                            Zuzüglich zu den angegebenen Produktpreisen kommen noch Versandkosten hinzu. Wir liefern nur im Versandweg. Eine Selbstabholung der Ware ist leider nicht möglich (außer bei speziellen Werksverkäufen).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-2">4. Bezahlung</h2>
                        <p>
                            In unserem Shop stehen Ihnen grundsätzlich die folgenden Zahlungsarten zur Verfügung: Vorkasse, Kreditkarte, PayPal.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-2">5. Eigentumsvorbehalt</h2>
                        <p>
                            Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.
                        </p>
                    </section>

                    <section className="bg-white/50 p-6 rounded-sm border-l-2 border-[#C68E66]">
                        <h2 className="font-serif text-2xl font-bold mb-4">6. Widerrufsrecht</h2>
                        <p className="mb-4">
                            Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                        </p>
                        <p className="font-bold mb-2">Ausschluss des Widerrufsrechts</p>
                        <p>
                            Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die schnell verderben können oder deren Verfallsdatum schnell überschritten würde (z.B. frische Pralinen).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-2">7. Gewährleistung und Garantien</h2>
                        <p>
                            Es gilt das gesetzliche Mängelhaftungsrecht. Informationen zu gegebenenfalls geltenden zusätzlichen Garantien und deren genaue Bedingungen finden Sie jeweils beim Produkt und auf besonderen Informationsseiten im Onlineshop.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-2">8. Streitbeilegung</h2>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#C68E66] underline">https:
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};