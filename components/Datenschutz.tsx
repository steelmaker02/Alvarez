
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

              <h3 className="font-bold text-lg mb-3">Wie erfassen wir Ihre Daten?</h3>
              <p className="text-base leading-relaxed mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in unser Kontaktformular oder bei der Anmeldung zu einer Führung eingeben.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6 text-cacao">2. Hosting und Content Delivery Networks (CDN)</h2>
              <p className="text-base leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei einem externen Anbieter (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Webseitenzugriffe und sonstige Daten handeln, die über eine Webseite generiert werden.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6 text-cacao">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="font-bold text-lg mb-3">Datenschutz</h3>
              <p className="text-base leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="font-bold text-lg mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="text-base leading-relaxed mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="font-bold text-lg mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="text-base leading-relaxed mb-4">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6 text-cacao">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="font-bold text-lg mb-3">Cookies</h3>
              <p className="text-base leading-relaxed mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>

              <h3 className="font-bold text-lg mb-3">Kontaktformular & Anfragen für Führungen</h3>
              <p className="text-base leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen (z.B. für Werksführungen, Seminare oder Firmenfeiern), werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>

              <h3 className="font-bold text-lg mb-3">Newsletter & Infoverteiler</h3>
              <p className="text-base leading-relaxed mb-4">
                Wenn Sie den auf der Website angebotenen Infoverteiler beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6 text-cacao">5. Plugins und Tools</h2>
              
              <h3 className="font-bold text-lg mb-3">Google Web Fonts (lokales Hosting)</h3>
              <p className="text-base leading-relaxed mb-4">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
