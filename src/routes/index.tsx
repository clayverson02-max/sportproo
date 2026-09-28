import { createFileRoute } from "@tanstack/react-router";
import { FunnelFooter, FunnelHeader, SportChoice, TrustLine } from "@/components/FunnelChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SportPro | Deja de improvisar. Entrena con un método." },
      {
        name: "description",
        content:
          "Elige Fútbol Americano, Fútbol de Campo o los dos métodos completos. Entrenamientos en video, acceso de por vida y una preparación con dirección.",
      },
      { property: "og:title", content: "SportPro | Tu esfuerzo merece un método" },
      {
        property: "og:description",
        content: "Elige tu deporte y descubre tu método de entrenamiento en video.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="sp-page sp-home">
      <FunnelHeader />
      <main id="contenido-principal">
        <section className="sp-home-intro sp-container" aria-labelledby="home-title">
          <p className="sp-eyebrow">
            <span /> TU ESFUERZO MERECE UN MÉTODO
          </p>
          <h1 id="home-title">
            Más de 3.000 entrenamientos.
            <br />
            <em>Deja de improvisar y evoluciona.</em>
          </h1>
          <p className="sp-intro">
            +500 de fútbol americano · +2.000 de fútbol de campo · +3.000 si eliges los dos.
            <br className="sp-desktop-break" /> Elige tu método y entrena como un profesional.
          </p>
        </section>
        <section className="sp-container sp-choice-section" aria-labelledby="choice-title">
          <div className="sp-section-label">
            <h2 id="choice-title">
              <span>01</span> ¿QUÉ QUIERES ENTRENAR?
            </h2>
            <p>Tu camino empieza con una elección.</p>
          </div>
          <div className="sp-choices">
            <SportChoice id="ambos" />
            <SportChoice id="americano" />
            <SportChoice id="campo" />
          </div>
          <TrustLine />
        </section>
      </main>
      <FunnelFooter />
    </div>
  );
}
