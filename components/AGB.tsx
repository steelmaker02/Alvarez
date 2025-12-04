import React, { useEffect } from 'react';

export const AGB: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F5F0EB] min-h-screen pt-32 pb-20 text-[#2B1B17]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="font-serif text-4xl md:text-5xl mb-12">Allgemeine Geschäftsbedingungen (AGB)</h1>

                <div className="space-y-8 font-sans leading-relaxed opacity-90">
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
                </div>
            </div>
        </div>
    );
};