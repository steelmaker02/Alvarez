import React, { useEffect } from 'react';

export const Impressum: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F5F0EB] min-h-screen pt-32 pb-20 text-[#2B1B17]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="font-serif text-4xl md:text-5xl mb-12">Impressum</h1>

                <div className="space-y-8 font-sans text-lg leading-relaxed">
                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
                        <p>
                            <strong>Alvarez Chocolat AG</strong><br />
                            Mahlerweg 12<br />
                            23552 Lübeck<br />
                            Deutschland
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-4">Kontakt</h2>
                        <p>
                            Telefon: +49 (0)451 123456<br />
                            Telefax: +49 (0)451 123457<br />
                            E-Mail: info@alvarez-chocolat.de
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-4">Vertretungsberechtigt</h2>
                        <p>
                            <strong>Geschäftsführung:</strong><br />
                            Henry Hübchen
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-4">Registereintrag</h2>
                        <p>
                            Eintragung im Handelsregister.<br />
                            Registergericht: Amtsgericht Lübeck<br />
                            Registernummer: HRB 12345 (Beispiel)
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            DE 123 456 789
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};