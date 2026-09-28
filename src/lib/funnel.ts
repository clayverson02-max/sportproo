import { offers, type Sport } from "./offers";

export const offerPaths = {
  americano: "/futbol-americano",
  campo: "/futbol-de-campo",
  ambos: "/los-dos-deportes",
} as const;

export const getOffer = (id: Sport) => offers.find((offer) => offer.id === id)!;

type Delivery = {
  title: string;
  description: string;
  icon: "strength" | "target" | "speed" | "jump" | "food" | "video" | "chart" | "phone";
  tag: string;
};

type FunnelContent = {
  title: [string, string];
  intro: string;
  card: string;
  stats: [string, string][];
  problem: string;
  promise: string;
  outcomes: string[];
  deliveries: Delivery[];
};

export const funnel: Record<Sport, FunnelContent> = {
  americano: {
    title: ["+500 entrenamientos.", "Rompe la línea."],
    intro:
      "Construye la fuerza, la velocidad y la explosividad que tu posición exige. Deja de entrenar al azar: empieza a entrenar con un sistema.",
    card: "Fuerza que se siente. Velocidad que marca la diferencia.",
    stats: [
      ["+500", "entrenamientos de gimnasio"],
      ["Por posición", "entrenamientos en campo"],
      ["En video", "para entrenar con intención"],
    ],
    problem: "El esfuerzo no te falta. El plan sí.",
    promise: "Cada repetición, con un propósito.",
    outcomes: [
      "Fuerza enfocada en tu deporte",
      "Técnica para tu posición",
      "Velocidad, salto y nutrición en un mismo método",
    ],
    deliveries: [
      {
        title: "+500 entrenamientos de gimnasio",
        description:
          "Trabaja fuerza y potencia explosiva con sesiones enfocadas en las exigencias del fútbol americano.",
        icon: "strength",
        tag: "FUERZA QUE SE TRANSFIERE AL CAMPO",
      },
      {
        title: "Tu posición. Tu preparación.",
        description:
          "Entrenamientos en campo, técnica de posición, jugadas y lectura del juego. Dale una dirección a cada sesión.",
        icon: "target",
        tag: "TÉCNICA Y LECTURA DEL JUEGO",
      },
      {
        title: "Gana el primer paso",
        description:
          "Estrategias de velocidad y aceleración para trabajar esa salida que puede cambiar una jugada.",
        icon: "speed",
        tag: "VELOCIDAD Y ACELERACIÓN",
      },
      {
        title: "Más impulso en cada acción",
        description:
          "Rutinas específicas de salto e impulso para desarrollar tu capacidad de despegar y reaccionar.",
        icon: "jump",
        tag: "EXPLOSIVIDAD Y SALTO",
      },
      {
        title: "Alimenta tu rendimiento",
        description:
          "Una rutina alimentaria completa para acompañar tu trabajo de fuerza, músculo y rendimiento.",
        icon: "food",
        tag: "NUTRICIÓN PARA TU OBJETIVO",
      },
      {
        title: "Llega listo para entrenar",
        description:
          "Recetas para apoyar tu energía antes del entrenamiento y hacer de la preparación parte de tu rutina.",
        icon: "food",
        tag: "RECETAS DE ENERGÍA",
      },
    ],
  },
  campo: {
    title: ["+2.000 entrenamientos.", "Domina tu juego."],
    intro:
      "Más de 2.000 ejercicios y 250 sesiones completas en video. Dale estructura a tu entrenamiento y llega a la cancha sabiendo qué trabajaste y por qué.",
    card: "Técnica, control y una progresión que tiene sentido.",
    stats: [
      ["+2.000", "ejercicios organizados"],
      ["+250", "sesiones completas en video"],
      ["A tu ritmo", "desde cualquier dispositivo"],
    ],
    problem: "Entrenar mucho no es avanzar con un método.",
    promise: "De los ejercicios sueltos a una progresión real.",
    outcomes: [
      "Ejercicios por posición y categoría",
      "Técnica explicada paso a paso",
      "Sesiones completas para dar continuidad a tu trabajo",
    ],
    deliveries: [
      {
        title: "+2.000 ejercicios organizados",
        description:
          "Encuentra el trabajo que necesitas según tu posición y categoría. Dedica tu tiempo a entrenar, no a buscar qué hacer.",
        icon: "target",
        tag: "TÉCNICA CON DIRECCIÓN",
      },
      {
        title: "+250 sesiones completas",
        description:
          "Mira el video de cada ejercicio y entiende cómo realizarlo. Pasa de una idea suelta a una sesión con estructura.",
        icon: "video",
        tag: "MIRA. ENTIENDE. ENTRENA.",
      },
      {
        title: "Avanza semana a semana",
        description:
          "Una progresión organizada para conectar tus entrenamientos y construir sobre lo que ya trabajaste.",
        icon: "chart",
        tag: "CONTINUIDAD Y PROGRESIÓN",
      },
      {
        title: "Nutrición que acompaña",
        description:
          "Una rutina alimentaria completa para apoyar tu preparación y darle al entrenamiento el lugar que merece.",
        icon: "food",
        tag: "PREPÁRATE DENTRO Y FUERA DEL CAMPO",
      },
      {
        title: "Tu método va contigo",
        description:
          "Accede desde el celular, la tablet o la computadora. Consulta el contenido cuando quieras y vuelve a cada ejercicio.",
        icon: "phone",
        tag: "ACCESO DESDE CUALQUIER DISPOSITIVO",
      },
      {
        title: "Una plataforma. Todo en video.",
        description:
          "Todo organizado en un solo lugar para que puedas elegir tu sesión y concentrarte en tu próximo entrenamiento.",
        icon: "video",
        tag: "MENOS BÚSQUEDAS. MÁS ENTRENAMIENTO.",
      },
    ],
  },
  ambos: {
    title: ["+3.000 entregables.", "Entrena como un profesional."],
    intro:
      "La fuerza del fútbol americano. La técnica del fútbol de campo. Los dos métodos completos en una sola plataforma para llevar tu preparación más lejos.",
    card: "Suma fuerza y técnica. Accede a los dos métodos completos.",
    stats: [
      ["+500", "entrenamientos de gimnasio"],
      ["+2.000", "ejercicios de fútbol de campo"],
      ["+250", "sesiones completas en video"],
    ],
    problem: "¿Por qué desarrollar solo una parte de tu potencial?",
    promise: "Elige las dos ventajas. Entrena más completo.",
    outcomes: [
      "Fuerza, explosividad y resistencia",
      "Técnica, control y posicionamiento",
      "Dos métodos completos con un solo acceso",
    ],
    deliveries: [
      {
        title: "Todo Fútbol Americano",
        description:
          "+500 entrenamientos de gimnasio, trabajo en campo por posición, velocidad y salto. Construye la base física de tu juego.",
        icon: "strength",
        tag: "UN MÉTODO COMPLETO DE FUERZA",
      },
      {
        title: "Todo Fútbol de Campo",
        description:
          "+2.000 ejercicios y +250 sesiones completas en video. Desarrolla tu técnica con una progresión organizada.",
        icon: "target",
        tag: "UN MÉTODO COMPLETO DE TÉCNICA",
      },
      {
        title: "Dos rutinas alimentarias",
        description:
          "Recibe la nutrición de ambos métodos y las recetas de energía del plan de Fútbol Americano para acompañar tu preparación.",
        icon: "food",
        tag: "PREPARACIÓN MÁS COMPLETA",
      },
      {
        title: "Todo en una plataforma",
        description:
          "Ambos métodos completos, organizados en video. Un solo pago y acceso de por vida desde tus dispositivos.",
        icon: "video",
        tag: "DOS DEPORTES. UN SOLO ACCESO.",
      },
    ],
  },
};

export function offerHead(id: Sport) {
  const offer = getOffer(id);
  const title = `${offer.title} | SportPro — Entrena con un método`;
  const description = funnel[id].intro;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  };
}
