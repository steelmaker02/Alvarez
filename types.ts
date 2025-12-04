export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageDefault: string;
  imageHover: string;
}

// 1. КЛАССИЧЕСКАЯ КОЛЛЕКЦИЯ
export const CLASSIC_PRODUCTS: Product[] = [
  {
    id: 'ingwer-mandel',
    name: 'Ingwer-Mandel',
    description: 'Zartbitter-Ganache mit kandiertem Ingwer.',
    price: '€ 1,60',
    imageDefault: 'Praline_23.png',
    imageHover: 'Praline_34.png',
  },
  {
    id: 'orangen-trueffel',
    name: 'Orangen-Trüffel',
    description: 'Fruchtige Orange in weißer Schokolade.',
    price: '€ 1,50',
    imageDefault: 'Praline_16.png',
    imageHover: 'Praline_30.png',
  },
  {
    id: 'haselnuss-creme',
    name: 'Haselnuss-Crème',
    description: 'Geröstete Piemont-Haselnüsse auf Nougat.',
    price: '€ 1,40',
    imageDefault: 'Praline_12.png',
    imageHover: 'Praline_33.png',
  },
  {
    id: 'cafe-whisky',
    name: 'Café-Whisky-Trüffel',
    description: 'Kräftiger Espresso trifft auf 12-jährigen Single Malt.',
    price: '€ 1,80',
    imageDefault: 'Praline_09.png',
    imageHover: 'Praline_28.png',
  },
  {
    id: 'kokos-mandel',
    name: 'Kokos-Mandel',
    description: 'Exotische Kokosnuss umhüllt von feiner Mandelcreme.',
    price: '€ 1,50',
    imageDefault: 'Praline_07.png',
    imageHover: 'Praline_29.png',
  }
];

// 2. ПАСХАЛЬНАЯ КОЛЛЕКЦИЯ (Яйца)
export const EASTER_PRODUCTS: Product[] = [
  {
    id: 'ei-himbeer-royal',
    name: 'Himbeer-Royal',
    description: 'Dunkle Schokolade trifft auf fruchtige Himbeer-Ganache und Crunch.',
    price: '€ 2,30',
    imageDefault: 'Ei_Himbeer.png',
    imageHover: 'Ei_Himbeer_Cut.png',
  },
  {
    id: 'ei-nougat-schicht',
    name: 'Nougat-Symphonie',
    description: 'Vier handgeschichtete Lagen feinster Nougat-Variation, im Kern mit fruchtiger Marmeladenfüllung.',
    price: '€ 2,50',
    imageDefault: 'Ei_Nougat.png',
    imageHover: 'Ei_Nougat_Cut.png',
  },
  {
    id: 'ei-salted-caramel',
    name: 'Jade Caramel',
    description: 'Marmorierte Hülle mit flüssigem Meersalz-Karamell Kern.',
    price: '€ 2,20',
    imageDefault: 'Ei_Caramel.png',
    imageHover: 'Ei_Caramel_Cut.png',
  },
  {
    id: 'ei-pistazie-sizilien',
    name: 'Sizilianische Pistazie',
    description: 'Cremiges Pistazienmark umhüllt von knackiger Zartbitterschokolade.',
    price: '€ 2,40',
    imageDefault: 'Ei_Pistazie.png',
    imageHover: 'Ei_Pistazie_Cut.png',
  },
  {
    id: 'ei-stracciatella',
    name: 'Stracciatella-Wölkchen',
    description: 'Weiße Schokolade mit Kakaosplittern und Vanille-Trüffel.',
    price: '€ 1,90',
    imageDefault: 'Ei_White.png',
    imageHover: 'Ei_White_Cut.png',
  }
];