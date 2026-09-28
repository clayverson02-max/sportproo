import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, UserRound } from "lucide-react";
import photo0 from "../../Captura de Tela 2026-09-09 às 18.48.30.png";
import photo1 from "../../Captura de Tela 2026-09-09 às 18.48.41.png";
import photo2 from "../../Captura de Tela 2026-09-09 às 18.48.50.png";
import photo3 from "../../Captura de Tela 2026-09-27 às 21.12.42.png";
import photo4 from "../../Captura de Tela 2026-09-27 às 21.13.28.png";
import photo5 from "../../Captura de Tela 2026-09-27 às 21.13.38.png";

type Sport = "americano" | "campo" | "ambos";
type Review = { name: string; role: string; quote: string; photo?: string };
type Offer = {
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
const checkoutUrls: Record<Sport, string> = {
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
const offers: Offer[] = [
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
const money = (value: number) => `$${value.toFixed(2).replace(".", ",")}`;
const premium = "ambos";
function Badges() {
  return (
    <div className="sp-badges">
      <span>MÁS ELEGIDO</span>
      <span>MEJOR VALOR</span>
    </div>
  );
}
function BuyButton({ offer }: { offer: Offer }) {
  const url = checkoutUrls[offer.id];
  const valid = /^https:\/\//i.test(url);
  const label = `${offer.id === premium ? "Quiero la Plataforma Completa" : "Quiero el método"} — ${money(offer.price)} USD`;
  return (
    <div className="sp-buy">
      {valid ? (
        <a className={`sp-button ${offer.id === premium ? "sp-gold" : ""}`} href={url}>
          {label}
          <ArrowRight size={19} />
        </a>
      ) : (
        <>
          <button className={`sp-button ${offer.id === premium ? "sp-gold" : ""}`} disabled>
            {label}
            <ArrowRight size={19} />
          </button>
          <p className="sp-note">La compra estará disponible próximamente.</p>
        </>
      )}
      <p className="sp-note">Pago único · Acceso de por vida · 7 días de garantía</p>
    </div>
  );
}
function Testimonials({ reviews }: { reviews: Review[] }) {
  if (!reviews.length) return null;
  return (
    <section className="sp-subsection" aria-label="Testimonios">
      <p className="sp-kicker">Experiencias reales</p>
      <h3>Quienes ya entrenan con el método</h3>
      <div className="sp-reviews">
        {reviews.slice(0, 3).map((review) => (
          <article key={review.name} className="sp-review">
            <div className="sp-review-person">
              {review.photo ? (
                <img src={review.photo} alt={review.name} loading="lazy" />
              ) : (
                <span className="sp-avatar">
                  <UserRound aria-hidden="true" />
                </span>
              )}
              <div>
                <strong>{review.name}</strong>
                <small>{review.role}</small>
              </div>
            </div>
            <blockquote>“{review.quote}”</blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}
function OfferSection({ offer, choose }: { offer: Offer; choose: (id: Sport) => void }) {
  const combo = offer.id === premium;
  return (
    <section
      id={`oferta-${offer.id}`}
      className={`sp-offer ${combo ? "sp-offer-combo" : ""}`}
      aria-labelledby={`title-${offer.id}`}
    >
      <div className="sp-container">
        <div className="sp-offer-heading">
          <div>
            <p className="sp-kicker">{offer.kicker}</p>
            {combo && <Badges />}
            <h2 id={`title-${offer.id}`} tabIndex={-1}>
              {offer.headline}
            </h2>
            <p className="sp-lead">{offer.subtitle}</p>
          </div>
          <div className={`sp-gallery ${combo ? "sp-gallery-combo" : ""}`}>
            {offer.images.map((image, i) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                {combo && (
                  <figcaption>
                    {i === 0 ? "🏈 Fuerza y explosividad" : "⚽ Técnica y control"}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
        <div className="sp-authority">
          <span className="sp-label">ENTRENA CON UN SISTEMA</span>
          <p>{offer.authority}</p>
        </div>
        <section className="sp-subsection">
          <p className="sp-kicker">Tu método, por dentro</p>
          <h3>Lo que recibes</h3>
          <ul className="sp-includes">
            {offer.items.map((item) => (
              <li key={item}>
                <Check size={19} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="sp-value sp-subsection" aria-label={`Valor de ${offer.title}`}>
          <div>
            <p className="sp-kicker">Todo en un solo acceso</p>
            <h3>
              Más que ejercicios.
              <br />
              Un método completo.
            </h3>
            <p className="sp-muted">
              Conoce los módulos incluidos y el precio de lanzamiento de tu acceso.
            </p>
          </div>
          <div className="sp-price-panel">
            <table className="sp-stack">
              <caption>Valor de referencia por módulo (USD)</caption>
              <thead>
                <tr>
                  <th scope="col">Módulo</th>
                  <th scope="col">Referencia</th>
                </tr>
              </thead>
              <tbody>
                {offer.modules.map(([name, value]) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td>{value === null ? "Incluido" : money(value)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Total de referencia</th>
                  <td>
                    <s>{money(offer.reference)}</s>
                  </td>
                </tr>
              </tfoot>
            </table>
            <p className="sp-reference-note">
              Referencias ilustrativas de los módulos; no son precios anteriores de venta.
            </p>
            <div className="sp-price">
              <span>Precio de lanzamiento</span>
              <strong>
                {money(offer.price)} <small>USD</small>
              </strong>
              <p>Pago único · Acceso de por vida</p>
            </div>
            {combo ? (
              <div className="sp-saving">
                <strong>
                  Los dos individuales: {money(13)} → Combo: {money(10.5)}
                </strong>
                <p>Ahorras {money(2.5)} USD frente a comprar los dos planes por separado.</p>
                <small>
                  Más del 90% menos frente al total de referencia ilustrativo de {money(154.4)} USD.
                </small>
              </div>
            ) : (
              <aside className="sp-upsell">
                <Badges />
                <strong>Por solo {money(4)} USD más, llévate los dos.</strong>
                <p>
                  ¿Sabías que por un poco más obtienes también el método completo de{" "}
                  {offer.id === "americano" ? "Fútbol de Campo" : "Fútbol Americano"}? Mira la
                  opción Los Dos Deportes más abajo y ahorra aún más.
                </p>
                <button className="sp-text-link" onClick={() => choose("ambos")}>
                  Ver Los Dos Deportes — {money(10.5)} USD <ArrowRight size={16} />
                </button>
              </aside>
            )}
          </div>
        </section>
        <Testimonials reviews={offer.reviews} />
        <section className="sp-guarantee" aria-label="Garantía">
          <ShieldCheck size={48} aria-hidden="true" />
          <div>
            <p className="sp-kicker">Tu tranquilidad, primero</p>
            <h3>7 días de garantía total.</h3>
            <p>Tienes 7 días para explorar el método. Si no te sirve, te devolvemos tu dinero.</p>
          </div>
        </section>
        <section className="sp-faq sp-subsection">
          <div>
            <p className="sp-kicker">Antes de empezar</p>
            <h3>Resolvemos tus dudas.</h3>
          </div>
          <div>
            {offer.faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <div className="sp-final">
          {combo && <Badges />}
          <h3>{offer.final}</h3>
          <BuyButton offer={offer} />
        </div>
      </div>
    </section>
  );
}
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sport Pro | Fútbol Americano, Fútbol de Campo y Combo" },
      {
        name: "description",
        content:
          "Métodos completos en video. Planes individuales por $6,50 USD o Los Dos Deportes por $10,50 USD. Pago único, acceso de por vida y 7 días de garantía.",
      },
    ],
  }),
  component: Index,
});
function Index() {
  const [selected, setSelected] = useState<Sport | null>(null);
  const choose = (id: Sport) => {
    setSelected(id);
    const heading = document.getElementById(`title-${id}`);
    heading?.focus({ preventScroll: true });
    document.getElementById(`oferta-${id}`)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  };
  return (
    <main className="sp-page">
      <header className="sp-header sp-container">
        <a href="#inicio" className="sp-brand">
          SPORT<span>PRO</span>
          <small>TRAINING PLATFORM</small>
        </a>
        <a
          className="sp-header-combo"
          href="#oferta-ambos"
          onClick={(e) => {
            e.preventDefault();
            choose("ambos");
          }}
        >
          Los Dos Deportes <span>MEJOR VALOR</span>
          <ArrowRight size={16} />
        </a>
      </header>
      <section id="inicio" className="sp-selector sp-container">
        <p className="sp-kicker">🎯 Plataforma de entrenamiento</p>
        <h1>
          Elige tu camino.
          <br />
          <span>Entrena con el método completo para tu deporte.</span>
        </h1>
        <p className="sp-intro">
          Una sola plataforma, entrenamientos organizados en video, hecha a la medida de lo que tú
          juegas.
        </p>
        <div className="sp-selector-grid">
          {offers.map((offer) => (
            <button
              key={offer.id}
              className={`sp-select-card ${offer.id === premium ? "sp-premium" : ""}`}
              aria-pressed={selected === offer.id}
              onClick={() => choose(offer.id)}
            >
              {offer.id === premium && <Badges />}
              <span className="sp-sport-emoji" aria-hidden="true">
                {offer.emoji}
              </span>
              <h2>{offer.title}</h2>
              <p>{offer.short}</p>
              <strong className="sp-selector-price">
                {money(offer.price)} <small>USD · pago único</small>
              </strong>
              <span className="sp-card-action">
                {offer.id === premium ? "Quiero los dos métodos" : "Ver mi método"}
                <ArrowRight size={17} />
              </span>
            </button>
          ))}
        </div>
        <div className="sp-trust">
          <span>
            <Check size={16} /> Acceso de por vida
          </span>
          <span>
            <ShieldCheck size={16} /> Garantía de 7 días
          </span>
          <span>Celular · Tablet · Computadora</span>
        </div>
      </section>
      {offers.map((offer) => (
        <OfferSection key={offer.id} offer={offer} choose={choose} />
      ))}
      <section className="sp-comparison sp-container">
        <p className="sp-kicker">La decisión, de un vistazo</p>
        <h2>Dos métodos. Una elección inteligente.</h2>
        <p className="sp-muted">
          Por {money(4)} USD más que un individual, accedes a los dos completos.
        </p>
        <div
          className="sp-table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Comparación de planes, desplaza horizontalmente para ver todos"
        >
          <table>
            <caption>Compara tu acceso</caption>
            <thead>
              <tr>
                <th scope="col">Incluye</th>
                {offers.map((o) => (
                  <th scope="col" key={o.id} className={o.id === premium ? "sp-combo-cell" : ""}>
                    {o.id === premium && <Badges />}
                    {o.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["+500 entrenamientos de gimnasio", true, false, true],
                ["Método de fútbol americano", true, false, true],
                ["+2.000 ejercicios de fútbol de campo", false, true, true],
                ["+250 sesiones de fútbol en video", false, true, true],
                ["Rutinas alimentarias", "1", "1", "2"],
                ["Acceso de por vida", true, true, true],
                ["Garantía de 7 días", true, true, true],
              ].map(([label, ...values]) => (
                <tr key={String(label)}>
                  <th scope="row">{label}</th>
                  {values.map((v, i) => (
                    <td key={i} className={i === 2 ? "sp-combo-cell" : ""}>
                      {typeof v === "boolean" ? (v ? "✓ Incluido" : "—") : v}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row">Pago único (USD)</th>
                {offers.map((o) => (
                  <td key={o.id} className={o.id === premium ? "sp-combo-cell" : ""}>
                    <strong>{money(o.price)}</strong>
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Tu elección</th>
                {offers.map((o) => (
                  <td key={o.id} className={o.id === premium ? "sp-combo-cell" : ""}>
                    <button className="sp-text-link" onClick={() => choose(o.id)}>
                      Ver {o.id === premium ? "el combo" : "el método"} →
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sp-comparison-close">
          <Badges />
          <h3>Llévate ambos por {money(10.5)} USD.</h3>
          <p>
            Ahorras {money(2.5)} USD frente a los {money(13)} USD de los dos individuales.
          </p>
          <BuyButton offer={offers[2]!} />
        </div>
      </section>
      <footer className="sp-footer sp-container">
        <a href="#inicio" className="sp-brand">
          SPORT<span>PRO</span>
        </a>
        <p>Contenido digital · Pago único · Acceso de por vida</p>
        <a href="#inicio">Volver al inicio ↑</a>
      </footer>
    </main>
  );
}
