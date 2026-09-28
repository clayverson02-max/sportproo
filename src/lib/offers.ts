import photo0 from "../../Captura de Tela 2026-09-09 às 18.48.30.png";
import photo1 from "../../Captura de Tela 2026-09-09 às 18.48.41.png";
import photo2 from "../../Captura de Tela 2026-09-09 às 18.48.50.png";
import photo3 from "../../Captura de Tela 2026-09-27 às 21.12.42.png";
import photo4 from "../../Captura de Tela 2026-09-27 às 21.13.28.png";
import photo5 from "../../Captura de Tela 2026-09-27 às 21.13.38.png";

export type Sport = "americano" | "campo" | "ambos";
export type Review = { name: string; role: string; quote: string; photo?: string };
export type Offer = {
  id: Sport;
  title: string;
  emoji: string;
  short: string;
  kicker: string;
  headline: string;
  subtitle: string;
  authority: string;
  items: string[];
  modules: [string, number | null][];
  price: number;
  reference: number;
  images: { src: string; alt: string }[];
  faqs: [string, string][];
  final: string;
  reviews: Review[];
};

// Add only verified, authorized testimonials. Empty lists keep the section hidden.
// Public checkout URLs only; never put API keys or payment secrets here.
export const checkoutUrls: Record<Sport, string> = {
  americano: import.meta.env["VITE_CHECKOUT_AMERICANO"] || "",
  campo: import.meta.env["VITE_CHECKOUT_CAMPO"] || "",
  ambos: import.meta.env["VITE_CHECKOUT_COMBO"] || "",
};
const soccerImages = [
  { src: photo0, alt: "Jugador de fútbol de campo practicando un remate frente a una barrera" },
  { src: photo1, alt: "Atleta de fútbol de campo en un estadio" },
  { src: photo2, alt: "Jugadores de fútbol de campo durante una jugada" },
];
const americanImages = [
  { src: photo3, alt: "Jugadores de fútbol americano disputando una jugada" },
  { src: photo4, alt: "Jugador de fútbol americano con casco y balón" },
  { src: photo5, alt: "Jugador de fútbol americano con uniforme azul y balón" },
];
export const offers: Offer[] = [
  {
    id: "americano",
    title: "Fútbol Americano",
    emoji: "🏈",
    short: "Fuerza, velocidad y explosividad. El método completo para dominar la línea.",
    kicker: "🏈 FÚTBOL AMERICANO",
    headline:
      "¿Quieres ser el jugador que rompe la línea, que corre más rápido, que golpea más fuerte que cualquiera en la cancha?",
    subtitle:
      "La mayoría entrena sin ningún plan: levanta peso al azar, corre sin técnica, come lo que encuentra. Así no se construye un atleta explosivo, se construye cansancio sin resultado.",
    authority:
      "Los atletas que llegan a nivel competitivo no entrenan un poco de todo. Siguen un sistema: fuerza específica, técnica de posición, velocidad trabajada de forma metódica, y una alimentación pensada para rendir. Eso es exactamente lo que tienes aquí, organizado en una sola plataforma.",
    items: [
      "🏋️ +500 entrenamientos de gimnasio enfocados en fuerza y potencia explosiva",
      "🏈 Entrenamientos en campo: técnica de posición, jugadas y lectura del juego",
      "⚡ Estrategias de velocidad y aceleración para ser más rápido que tu rival",
      "🦵 Rutinas específicas de salto e impulso para dominar cada jugada",
      "🥗 Rutina alimentaria completa para ganar músculo y rendimiento",
      "🔥 Recetas para aumentar tu energía y adrenalina antes de cada entrenamiento",
      "🎥 Todo en video, organizado por categoría, en una sola plataforma",
    ],
    modules: [
      ["+500 entrenamientos de gimnasio", 34.9],
      ["Entrenamientos en campo por posición", 29.9],
      ["Estrategias de velocidad y salto", 19.9],
      ["Rutina alimentaria + recetas de energía", 19.9],
    ],
    reference: 104.6,
    price: 6.5,
    images: americanImages,
    faqs: [
      [
        "¿Necesito equipo de gimnasio específico?",
        "La mayoría de los entrenamientos se adaptan a lo que tengas disponible.",
      ],
      [
        "¿Sirve para cualquier posición?",
        "Sí, los entrenamientos están organizados por posición y rol.",
      ],
      ["¿Cuánto tiempo tengo acceso?", "De por vida, con un solo pago."],
    ],
    final:
      "No sigas entrenando a ciegas. Entra ahora y conviértete en el jugador que nadie puede parar.",
    reviews: [],
  },
  {
    id: "campo",
    title: "Fútbol de Campo",
    emoji: "⚽",
    short: "Técnica, gambeta y visión de juego. +2.000 ejercicios organizados por posición.",
    kicker: "⚽ FÚTBOL DE CAMPO",
    headline: "¿Cansado de entrenar sin método y llegar al partido sin saber si estás preparado?",
    subtitle:
      "Buscar ejercicios sueltos en internet no te da progresión. Sin un sistema real, entrenas mucho y avanzas poco.",
    authority:
      "Lo que separa a un jugador que mejora de uno que se estanca no es el esfuerzo: es tener una progresión organizada, con la técnica correcta explicada paso a paso. Eso es lo que encuentras aquí.",
    items: [
      "⚽ Más de 2.000 ejercicios organizados por posición y categoría",
      "🎥 Más de 250 sesiones completas, con video de cada ejercicio",
      "📈 Progresión real, semana a semana",
      "🥗 Rutina alimentaria completa para rendir al máximo",
      "📱 Acceso desde cualquier dispositivo, cuando quieras",
    ],
    modules: [
      ["+2.000 ejercicios organizados", 29.9],
      ["+250 sesiones completas en video", null],
      ["Rutina alimentaria", 19.9],
    ],
    reference: 49.8,
    price: 6.5,
    images: soccerImages,
    faqs: [
      [
        "¿Cómo recibo el acceso?",
        "Recibirás las instrucciones en el correo utilizado en la compra.",
      ],
      ["¿En qué dispositivos funciona?", "Celular, tablet o computadora."],
      ["¿Cuánto tiempo tengo acceso?", "De por vida, con un solo pago."],
    ],
    final:
      "Deja de improvisar. Entra ahora y entrena con el método que separa a quien mejora de quien se estanca.",
    reviews: [],
  },
  {
    id: "ambos",
    title: "Los Dos Deportes",
    emoji: "🔥",
    short: "Fuerza de un lado, técnica del otro. El atleta más completo se entrena con ambos.",
    kicker: "🔥 EL ATLETA COMPLETO — MÁS ELEGIDO",
    headline:
      "¿Y si la fuerza de un deporte y la técnica del otro se combinaran en un solo entrenamiento?",
    subtitle:
      "El fútbol americano te da fuerza, explosividad y resistencia. El fútbol de campo te da técnica corporal, gambeta y posicionamiento. Por separado, son dos deportes. Juntos, son la fórmula del atleta completo: el cuerpo que aguanta el choque y las piernas que dominan el balón.",
    authority:
      "Los atletas más completos no se limitan a un solo tipo de entrenamiento. Combinan fuerza física con inteligencia técnica: y eso es exactamente lo que esta plataforma te permite construir, sin tener que elegir entre uno u otro.",
    items: [
      "🏈 Todo el método de Fútbol Americano: +500 entrenamientos de gimnasio, campo, velocidad y nutrición",
      "⚽ Todo el método de Fútbol de Campo: +2.000 ejercicios, +250 sesiones en video",
      "🥗 Dos rutinas alimentarias completas",
      "🎥 Todo organizado en video, en una sola plataforma",
    ],
    modules: [
      ["Plataforma Fútbol Americano completa", 104.6],
      ["Plataforma Fútbol de Campo completa", 49.8],
    ],
    reference: 154.4,
    price: 10.5,
    images: [americanImages[0]!, soccerImages[0]!],
    faqs: [
      [
        "¿Necesito jugar los dos deportes para que me sirva?",
        "No. Puedes combinar los métodos para desarrollar fuerza, velocidad y técnica que complementen tu deporte principal.",
      ],
      [
        "¿Incluye las dos plataformas completas?",
        "Sí. Recibes el mismo contenido de ambos planes completos por menos de lo que cuesta comprarlos por separado.",
      ],
      ["¿Cuánto tiempo tengo acceso?", "De por vida, con un solo pago."],
    ],
    final:
      "Sé el atleta que entrena los dos mundos. Entra ahora y accede a la plataforma completa.",
    reviews: [],
  },
];
export const money = (value: number) => `$${value.toFixed(2).replace(".", ",")}`;
