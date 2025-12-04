import React, { useEffect } from 'react';

export const Datenschutz: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto font-sans text-cacao/90">
          <h1 className="font-serif text-4xl md:text-5xl mb-12 text-cacao">Datenschutzerklärung</h1>

          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6 text-cacao">1. Datenschutz auf einen Blick</h2>

              <h3 className="font-bold text-lg mb-3">Allgemeine Hinweise</h3>
              <p className="text-base leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="font-bold text-lg mb-3">Verantwortliche Stelle</h3>
              <p className="text-base leading-relaxed mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
              </p>
              <address className="not-italic mb-4 bg-white/50 p-6 rounded-sm border-l-2 border-copper">
                <strong>Alvarez Chocolat AG</strong><br />
                Mahlerweg 12<br />
                23552 Lübeck<br />
                Deutschland<br /><br />
                Telefon: +49 (0)451 123456<br />
                E-Mail: info@alvarez-chocolat.de<br />
                Geschäftsführung: Henry Hübchen
              </address>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6 text-cacao">2. Hosting</h2>
              <h3 className="font-bold text-lg mb-3">Hosting über GitHub Pages</h3>
              <p className="text-base leading-relaxed mb-4">
                Wir hosten unsere Website bei <strong>GitHub Inc.</strong> (88 Colin P Kelly Jr St, San Francisco, CA 94107, USA).
              </p>
              <p className="text-base leading-relaxed mb-4">
                Wenn Sie unsere Website besuchen, erfasst GitHub diverse Logfiles inklusive Ihrer IP-Adressen.
                Details entnehmen Sie der Datenschutzerklärung von GitHub: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-copper underline">GitHub Privacy Statement</a>.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Die Verwendung von GitHub Pages erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6 text-cacao">3. Allgemeine Hinweise</h2>
              <h3 className="font-bold text-lg mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
              <p className="text-base leading-relaxed mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
              </p>

              <h3 className="font-bold text-lg mb-3">Widerruf Ihrer Einwilligung</h3>
              <p className="text-base leading-relaxed mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6 text-cacao">4. Datenerfassung auf dieser Website</h2>

              <h3 className="font-bold text-lg mb-3">Kontaktformular & E-Mail</h3>
              <p className="text-base leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="font-bold text-lg mb-3">Cookies</h3>
              <p className="text-base leading-relaxed mb-4">
                Unsere Website verwendet ausschließlich technisch notwendige Cookies (z.B. für die Warenkorb-Funktion), die für den Betrieb der Seite erforderlich sind. Es werden keine Tracking- oder Werbe-Cookies von Drittanbietern eingesetzt.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6 text-cacao">5. Plugins und Tools</h2>

              <h3 className="font-bold text-lg mb-3">Google Web Fonts (Lokal)</h3>
              <p className="text-base leading-relaxed mb-4">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts.
                Die Google Fonts sind lokal installiert. <strong>Eine Verbindung zu Servern von Google findet dabei nicht statt.</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};