import React, { useEffect, useState } from 'react';

interface FormData {
    date: string;
    personCount: string;
    lastName: string;
    firstName: string;
    street: string;
    city: string;
    phone: string;
    email: string;
}

export const KontaktFuehrung: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState<FormData>({
        date: '',
        personCount: '',
        lastName: '',
        firstName: '',
        street: '',
        city: '',
        phone: '',
        email: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.lastName) newErrors.lastName = 'Pflichtfeld';
        if (!formData.firstName) newErrors.firstName = 'Pflichtfeld';
        if (!formData.email) newErrors.email = 'Pflichtfeld';

        const phoneRegex = /^(\+|0)[0-9 \-\(\)\/]{6,}$/;

        if (formData.phone && !phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Bitte gültiges Format eingeben (z.B. +49 170...)';
        }

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Ungültige E-Mail-Adresse';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            alert("Formular erfolgreich gesendet! (Форма успешно отправлена)");
            console.log("Данные для отправки:", formData);
        } else {
            alert("Bitte überprüfen Sie Ihre Eingaben. (Пожалуйста, проверьте введенные данные)");
        }
    };

    const getInputClass = (fieldName: keyof FormData) => `
        w-full p-3 border outline-none transition-colors
        ${errors[fieldName]
            ? 'border-red-500 bg-red-50 focus:border-red-500'
            : 'border-[#2B1B17]/20 focus:border-[#C68E66] bg-white'
        }
    `;

    return (
        <div className="bg-[#F5F0EB] min-h-screen pt-32 pb-20 text-[#2B1B17]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="font-serif text-4xl md:text-5xl mb-10 text-[#2B1B17]">Kontakt & Führung</h1>

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

                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-sm shadow-sm border border-[#2B1B17]/5">
                    <h2 className="font-serif text-2xl mb-6">Anmeldung zur Führung</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-bold uppercase tracking-wide mb-2 text-[#C68E66]">Wunschtermin</label>
                            <input
                                type="date"
                                name="date"
                                onChange={handleChange}
                                className="w-full p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none bg-[#F5F0EB]/30"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold uppercase tracking-wide mb-2 text-[#C68E66]">Personenanzahl</label>
                            <select
                                name="personCount"
                                onChange={handleChange}
                                className="w-full p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none bg-[#F5F0EB]/30"
                            >
                                <option value="">Bitte wählen...</option>
                                <option value="1-5">1-5</option>
                                <option value="6-15">6-15</option>
                                <option value="16-30">16-30</option>
                                <option value="large">Größere Gruppe</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Name *"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={getInputClass('lastName')}
                            />
                            {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>}
                        </div>

                        <div className="flex flex-col">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Vorname *"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={getInputClass('firstName')}
                            />
                            {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>}
                        </div>
                    </div>

                    <input
                        type="text"
                        name="street"
                        placeholder="Straße / Hausnummer"
                        onChange={handleChange}
                        className="w-full p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input
                            type="text"
                            name="city"
                            placeholder="PLZ / Ort"
                            onChange={handleChange}
                            className="md:col-span-1 p-3 border border-[#2B1B17]/20 focus:border-[#C68E66] outline-none"
                        />

                        <div className="md:col-span-1 flex flex-col">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Telefon +49 170 123456"
                                value={formData.phone}
                                onChange={handleChange}
                                className={getInputClass('phone')}
                            />
                            {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
                        </div>

                        <div className="md:col-span-1 flex flex-col">
                            <input
                                type="email"
                                name="email"
                                placeholder="E-Mail *"
                                value={formData.email}
                                onChange={handleChange}
                                className={getInputClass('email')}
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="flex items-start gap-3 mt-4">
                        <input type="checkbox" id="newsletter" className="mt-1 accent-[#C68E66]" />
                        <label htmlFor="newsletter" className="text-sm text-[#2B1B17]/80">
                            Ich bin an weiteren Informationen interessiert. Bitte nehmen Sie mich in Ihren Infoverteiler auf.
                        </label>
                    </div>

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

                    <div className="flex gap-4 pt-6">
                        <button
                            type="button"
                            onClick={() => {
                                setFormData({ date: '', personCount: '', lastName: '', firstName: '', street: '', city: '', phone: '', email: '' });
                                setErrors({});
                            }}
                            className="px-6 py-3 border border-[#2B1B17] text-[#2B1B17] hover:bg-[#2B1B17]/5 transition-colors uppercase text-sm tracking-widest"
                        >
                            Zurücksetzen
                        </button>

                        <button
                            type="submit"
                            className="px-8 py-3 bg-[#2B1B17] text-[#F5F0EB] hover:bg-[#C68E66] transition-colors uppercase text-sm tracking-widest"
                        >
                            Absenden
                        </button>
                    </div>

                    <p className="text-sm italic text-[#C68E66] mt-4">Wir beraten Sie gerne!</p>
                </form>
            </div>
        </div>
    );
};