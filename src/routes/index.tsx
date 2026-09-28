import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

type Sport = "americano" | "campo" | "ambos" | null;

const sports: {
  id: Exclude<Sport, null>;
  emoji: string;
  title: string;
  description: string;
}[] = [
  {
    id: "americano",
    emoji: "🏈",
    title: "Fútbol Americano",
    description:
      "Fuerza, velocidad y explosividad. El método completo para dominar la línea.",
  },
  {
    id: "campo",
    emoji: "⚽",
    title: "Fútbol de Campo",
    description:
      "Técnica, gambeta y visión de juego. +2.000 ejercicios organizados por posición.",
  },
  {
    id: "ambos",
    emoji: "🔥",
    title: "Los Dos Deportes",
    description:
      "Fuerza de un lado, técnica del otro. El atleta más completo se entrena con ambos.",
  },
];

const offers: Record<
  Exclude<Sport, null>,
  {
    badge: string;
    emoji: string;
    hook: string;
    agitation?: string;
    body?: string;
    items: string[];
    cta: string;
  }
> = {
  americano: {
    badge: "Fútbol Americano",
    emoji: "🏈",
    hook: "¿Quieres ser el jugador que rompe la línea, que corre más rápido, que golpea más fuerte que cualquiera en la cancha?",
    agitation:
      "La mayoría entrena sin ningún plan: levanta peso al azar, corre sin técnica, come lo que encuentra. Así no se construye un atleta explosivo, se construye cansancio sin resultado.",
    items: [
      "🏋️ Entrenamientos de gimnasio enfocados en fuerza y potencia explosiva",
      "🏈 Entrenamientos en campo: técnica de posición, jugadas y lectura del juego",
      "⚡ Estrategias de velocidad y aceleración",
      "🦵 Rutinas específicas de salto e impulso",
      "🥗 Rutina alimentaria completa",
      "🔥 Recetas para aumentar energía y adrenalina",
    ],
    cta: "Quiero el método de Fútbol Americano",
  },
  campo: {
    badge: "Fútbol de Campo",
    emoji: "⚽",
    hook: "¿Cansado de entrenar sin método y llegar al partido sin saber si estás preparado?",
    agitation:
      "Buscar ejercicios sueltos en internet no te da progresión. Sin un sistema real, entrenas mucho y avanzas poco.",
    items: [
      "⚽ Más de 2.000 ejercicios organizados por posición y categoría",
      "🎥 Más de 250 sesiones completas, con video de cada ejercicio",
      "📈 Progresión real, semana a semana",
      "🥗 Rutina alimentaria completa",
    ],
    cta: "Quiero el método de Fútbol de Campo",
  },
  ambos: {
    badge: "Los Dos Deportes",
    emoji: "🔥",
    hook: "¿Y si la fuerza de un deporte y la técnica del otro se combinaran en un solo entrenamiento?",
    body: "El fútbol americano te da fuerza, explosividad y resistencia. El fútbol de campo te da técnica corporal, gambeta y posicionamiento. Por separado, son dos deportes. Juntos, son la fórmula del atleta completo.",
    items: [
      "🏈 Todo el entrenamiento de fútbol americano: gimnasio, campo, velocidad, nutrición",
      "⚽ Todo el entrenamiento de fútbol de campo: +2.000 ejercicios, +250 sesiones",
      "🥗 Dos rutinas alimentarias completas",
      "🎥 Todo organizado en video, en una sola plataforma",
    ],
    cta: "Quiero la Plataforma Completa (los dos deportes)",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Entrena con el método completo para tu deporte",
      },
      {
        name: "description",
        content:
          "Una sola plataforma, entrenamientos organizados en video, hecha a la medida de lo que tú juegas. Fútbol americano, fútbol de campo o los dos deportes.",
      },
      { property: "og:title", content: "Entrena con el método completo para tu deporte" },
      {
        property: "og:description",
        content:
          "Una sola plataforma, entrenamientos organizados en video, hecha a la medida de lo que tú juegas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<Sport>(null);

  const offer = selected ? offers[selected] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Selector */}
      <section
        aria-hidden={selected !== null}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          selected ? "max-h-0 opacity-0" : "max-h-[1200px] opacity-100"
        }`}
      >
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 py-12">
          <div className="text-center">
            <p className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              🎯 Plataforma de entrenamiento
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Elige tu camino.{" "}
              <span className="text-primary">
                Entrena con el método completo para tu deporte.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Una sola plataforma, entrenamientos organizados en video, hecha a la
              medida de lo que tú juegas.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-3">
            {sports.map((sport) => (
              <button
                key={sport.id}
                type="button"
                onClick={() => {
                  setSelected(sport.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group flex flex-col items-center rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8"
              >
                <span className="text-5xl transition-transform duration-300 group-hover:scale-110 sm:text-6xl">
                  {sport.emoji}
                </span>
                <h2 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
                  {sport.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {sport.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90">
                  Ver mi método →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Offer section */}
      {offer && selected && (
        <section key={selected} className="animate-in fade-in slide-in-from-bottom-6 duration-500">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              ← Elegir otro deporte
            </button>

            <div className="mt-4 rounded-3xl bg-foreground p-6 text-background sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {offer.emoji} {offer.badge}
              </p>
              <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
                {offer.hook}
              </h2>
              {offer.agitation && (
                <p className="mt-4 text-sm leading-relaxed text-background/70 sm:text-base">
                  {offer.agitation}
                </p>
              )}
              {offer.body && (
                <p className="mt-4 text-sm leading-relaxed text-background/70 sm:text-base">
                  {offer.body}
                </p>
              )}

              <h3 className="mt-8 text-lg font-bold text-primary sm:text-xl">
                Lo que recibes:
              </h3>
              <ul className="mt-4 space-y-3">
                {offer.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-2xl bg-background/5 p-3.5 text-sm leading-relaxed sm:text-base"
                  >
                    <span className="text-base leading-6">{item.split(" ")[0]}</span>
                    <span>{item.split(" ").slice(1).join(" ")}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center sm:p-6">
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-background/80">
                  <span>✅ Pago único</span>
                  <span>♾️ Acceso de por vida</span>
                  <span>🛡️ 7 días de garantía</span>
                </div>
                <a
                  href="#"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 sm:w-auto sm:px-10"
                >
                  {offer.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
