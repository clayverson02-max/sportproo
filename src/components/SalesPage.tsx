import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CirclePlay,
  Dumbbell,
  Flame,
  Gauge,
  Goal,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Trophy,
  Utensils,
  Video,
  Zap,
} from "lucide-react";
import { ComboBadges, FunnelFooter, FunnelHeader, TrustLine } from "./FunnelChrome";
import { funnel, getOffer, offerPaths } from "@/lib/funnel";
import { checkoutUrls, money, type Sport } from "@/lib/offers";
import type { ReactNode } from "react";

const icons = {
  strength: Dumbbell,
  target: Goal,
  speed: Gauge,
  jump: Zap,
  food: Utensils,
  video: Video,
  chart: Trophy,
  phone: CirclePlay,
};

const coachImages = {
  campo:
    "https://raw.githubusercontent.com/clayverson02-max/sportproo/main/Captura%20de%20Tela%202026-09-27%20a%CC%80s%2022.06.59.png",
  americano:
    "https://raw.githubusercontent.com/clayverson02-max/sportproo/main/Captura%20de%20Tela%202026-09-27%20a%CC%80s%2022.08.56.png",
};

const coachCopy = {
  campo: {
    eyebrow: "QUIÉN SOY · +15 AÑOS EN EL CAMPO",
    title: "Coach Martínez: metodología que forma jugadores de verdad",
    text: "Llevo más de 15 años como entrenador profesional trabajando con academias, canteras y jugadores amateur en toda Latinoamérica y España. He formado a más de 2.000 futbolistas, desde niños de 6 años hasta adultos en clubes semiprofesionales.",
    second:
      "Esta biblioteca reúne toda mi metodología en un solo lugar: los mismos ejercicios, la misma progresión y las mismas guías que uso día tras día en el campo. Sin relleno. Sin teoría vacía. Solo una ruta clara para entrenar mejor.",
    stats: [
      ["+2.000", "jugadores formados"],
      ["15", "años en el campo"],
    ],
  },
  americano: {
    eyebrow: "QUIÉN SOY · +15 AÑOS DE EXPERIENCIA",
    title: "Un coach que entiende el juego completo",
    text: "Llevo más de 15 años trabajando el fútbol americano desde todos sus ángulos: técnica, preparación física y estrategia. Durante ese tiempo he acompañado a jugadores que necesitaban más que una rutina genérica: necesitaban convertir su trabajo en rendimiento dentro del campo.",
    second:
      "Esta plataforma concentra una metodología práctica para desarrollar fuerza, explosividad, velocidad, técnica de posición y lectura de juego. Cada bloque tiene una razón de ser y está organizado para que entrenes con intención.",
    stats: [
      ["15+", "años de experiencia"],
      ["360°", "técnica, físico y estrategia"],
    ],
  },
};

function CheckoutButton({ id }: { id: Sport }) {
  const offer = getOffer(id);
  const url = checkoutUrls[id];
  const label = id === "ambos" ? "Quiero la Plataforma Completa" : "Quiero el método";
  if (/^https:\/\//i.test(url))
    return (
      <a className={`sp-buy-button ${id === "ambos" ? "sp-buy-gold" : ""}`} href={url}>
        {label} — {money(offer.price)} USD <ArrowRight size={19} />
      </a>
    );
  return (
    <div>
      <button className={`sp-buy-button ${id === "ambos" ? "sp-buy-gold" : ""}`} disabled>
        {label} — {money(offer.price)} USD <ArrowRight size={19} />
      </button>
      <p className="sp-buy-note">La compra estará disponible próximamente.</p>
    </div>
  );
}

function OfferLink({ children = "Ver el paquete completo" }: { children?: ReactNode }) {
  return (
    <a className="sp-buy-button" href="#oferta">
      {children} <ArrowRight size={19} />
    </a>
  );
}

function PriceCard({ id }: { id: Sport }) {
  const offer = getOffer(id);
  return (
    <section
      className={`sp-price-card ${id === "ambos" ? "sp-price-combo" : ""}`}
      id="oferta"
      aria-label={`Oferta ${offer.title}`}
    >
      {id === "ambos" && (
        <div className="sp-price-badge">
          <Sparkles size={14} /> MÁS ELEGIDO · MEJOR VALOR
        </div>
      )}
      <p className="sp-price-kicker">ACCESO COMPLETO</p>
      <h2>
        {offer.emoji} {offer.title}
      </h2>
      <div className="sp-price-row">
        <span className="sp-price-old">Valor de referencia: {money(offer.reference)} USD</span>
        <strong>
          {money(offer.price)} <small>USD</small>
        </strong>
      </div>
      <p className="sp-price-caption">Pago único · acceso de por vida</p>
      <CheckoutButton id={id} />
      <p className="sp-price-safe">
        <ShieldCheck size={16} /> 7 días de garantía total
      </p>
    </section>
  );
}

function SalesPage({ id }: { id: Sport }) {
  const offer = getOffer(id);
  const copy = funnel[id];
  const combo = id === "ambos";
  const next = combo ? undefined : offerPaths.ambos;
  const coach = id === "ambos" ? coachCopy.campo : coachCopy[id];
  return (
    <div className={`sp-page sp-sales ${combo ? "sp-sales-combo" : ""}`}>
      <FunnelHeader current={id} />
      <main id="contenido-principal">
        <div className="sp-sales-crumb sp-container">
          <Link to="/">← Elegir otro deporte</Link>
          {combo && <span> · La elección más completa</span>}
        </div>
        <section className="sp-sales-hero sp-container" aria-labelledby="sales-title">
          <div className="sp-sales-hero-copy">
            <p className="sp-eyebrow">
              <span /> {offer.kicker}
            </p>
            {combo && <ComboBadges />}
            <h1 id="sales-title">
              {copy.title[0]}
              <br />
              <em>{copy.title[1]}</em>
            </h1>
            <p className="sp-sales-intro">{copy.intro}</p>
            <a href="#oferta" className={`sp-hero-cta ${combo ? "sp-button-gold" : ""}`}>
              Ver lo que incluye <ArrowRight size={18} />
            </a>
            <TrustLine />
          </div>
          <div className={`sp-sales-hero-media ${combo ? "sp-sales-hero-combo" : ""}`}>
            {offer.images.slice(0, combo ? 2 : 1).map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} />
            ))}
            <div className="sp-image-stamp">
              <span>{combo ? "+2" : offer.id === "americano" ? "+500" : "+2.000"}</span>
              <small>
                {combo
                  ? "métodos completos"
                  : offer.id === "americano"
                    ? "entrenamientos"
                    : "ejercicios"}
              </small>
            </div>
          </div>
        </section>
        <section className="sp-proof-strip">
          <div className="sp-container sp-stats">
            {copy.stats.map(([big, small]) => (
              <div key={big + small}>
                <strong>{big}</strong>
                <span>{small}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="sp-problem sp-container">
          <p className="sp-eyebrow">
            <span /> LA DIFERENCIA ESTÁ EN EL SISTEMA
          </p>
          <h2>
            {copy.problem}
            <br />
            <em>{copy.promise}</em>
          </h2>
          <p>{offer.authority}</p>
          <ul>
            {copy.outcomes.map((item) => (
              <li key={item}>
                <Check size={18} /> {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="sp-deliveries sp-container" aria-labelledby="deliveries-title">
          <div className="sp-section-label">
            <h2 id="deliveries-title">
              <span>02</span> LO QUE VAS A RECIBIR
            </h2>
            <p>Todo organizado para que sepas qué hacer en cada entrenamiento.</p>
          </div>
          <div className="sp-delivery-grid">
            {copy.deliveries.map((item) => {
              const Icon = icons[item.icon];
              return (
                <article className="sp-delivery" key={item.title}>
                  <div className="sp-delivery-icon">
                    <Icon size={23} />
                  </div>
                  <small>{item.tag}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section className="sp-visual-break">
          <div className="sp-container">
            <div>
              <p className="sp-eyebrow">
                <span /> ENTRENA CON INTENCIÓN
              </p>
              <h2>
                Tu próxima sesión
                <br />
                <em>ya tiene dirección.</em>
              </h2>
            </div>
            <div className="sp-mini-gallery">
              {offer.images.slice(0, 3).map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
              ))}
            </div>
          </div>
        </section>
        {!combo && (
          <section className="sp-coach sp-container" aria-labelledby="coach-title">
            <div className="sp-coach-photo">
              <img src={coachImages[id]} alt="Coach en el campo de entrenamiento" loading="lazy" />
              <span>METODOLOGÍA EN EL CAMPO</span>
            </div>
            <div className="sp-coach-copy">
              <p className="sp-eyebrow">
                <span /> {coach.eyebrow}
              </p>
              <h2 id="coach-title">{coach.title}</h2>
              <p>{coach.text}</p>
              <p>{coach.second}</p>
              <div className="sp-coach-stats">
                {coach.stats.map(([big, label]) => (
                  <div key={label}>
                    <strong>{big}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {combo && (
          <section className="sp-coach-team sp-container" aria-labelledby="coaches-title">
            <div className="sp-coach-team-heading">
              <p className="sp-eyebrow">
                <span /> DOS ESPECIALISTAS · UNA PLATAFORMA COMPLETA
              </p>
              <h2 id="coaches-title">Entrena con la visión de quienes viven el deporte.</h2>
              <p>
                El plan completo reúne dos metodologías que se complementan: una construye fuerza y
                explosividad; la otra desarrolla técnica, control y lectura del juego. Es la
                preparación que te permite crecer como atleta desde más de un ángulo.
              </p>
            </div>
            <div className="sp-coach-team-grid">
              {(["campo", "americano"] as const).map((coachId) => {
                const profile = coachCopy[coachId];
                return (
                  <article className="sp-coach-team-card" key={coachId}>
                    <div className="sp-coach-team-photo">
                      <img
                        src={coachImages[coachId]}
                        alt="Coach en el campo de entrenamiento"
                        loading="lazy"
                      />
                    </div>
                    <div className="sp-coach-team-body">
                      <p className="sp-eyebrow">
                        <span /> {profile.eyebrow}
                      </p>
                      <h3>{profile.title}</h3>
                      <p>{profile.text}</p>
                      <p>{profile.second}</p>
                      <div className="sp-coach-stats">
                        {profile.stats.map(([big, label]) => (
                          <div key={label}>
                            <strong>{big}</strong>
                            <span>{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
        <section className="sp-value-section sp-container" aria-labelledby="value-title">
          <div className="sp-value-heading">
            <p className="sp-eyebrow">
              <span /> PONLE VALOR A TU PREPARACIÓN
            </p>
            <h2 id="value-title">
              Todo esto cabe
              <br />
              <em>en una sola decisión.</em>
            </h2>
            <p>Accede a tu método completo con un solo pago y entrena desde donde estés.</p>
          </div>
          <div className="sp-stack">
            <div className="sp-stack-list">
              {offer.modules.map(([name, value]) => (
                <div key={name}>
                  <span>
                    <Check size={16} /> {name}
                  </span>
                  <b>{value === null ? "INCLUIDO" : money(value) + " USD"}</b>
                </div>
              ))}
              <div className="sp-stack-total">
                <span>Valor total de referencia</span>
                <b>{money(offer.reference)} USD</b>
              </div>
            </div>
            <div className="sp-stack-price">
              <small>PRECIO DE LANZAMIENTO</small>
              <strong>
                {money(offer.price)} <i>USD</i>
              </strong>
              <span>Pago único · acceso de por vida</span>
              <OfferLink>Quiero ver mi paquete</OfferLink>
            </div>
          </div>
        </section>
        <PriceCard id={id} />
        {next && (
          <section className="sp-upsell sp-container">
            <div>
              <p className="sp-eyebrow">
                <span /> UNA OPCIÓN MÁS COMPLETA
              </p>
              <h2>
                ¿Y si entrenaras
                <br />
                <em>los dos deportes?</em>
              </h2>
              <p>
                Por solo {money(4)} USD adicionales, accede a la plataforma completa de Los Dos
                Deportes y desarrolla más cualidades con un solo acceso.
              </p>
            </div>
            <Link to={next} className="sp-button sp-button-gold">
              Ver Los Dos Deportes <ArrowRight size={18} />
            </Link>
          </section>
        )}
        <section className="sp-guarantee">
          <div className="sp-container">
            <div className="sp-guarantee-icon">
              <ShieldCheck size={32} />
            </div>
            <div>
              <p className="sp-eyebrow">
                <span /> COMPRA CON TRANQUILIDAD
              </p>
              <h2>
                7 días para probar
                <br />
                <em>tu nuevo método.</em>
              </h2>
              <p>
                Si el contenido no te sirve, tienes 7 días de garantía total. Queremos que entres
                con confianza y encuentres un sistema que realmente puedas usar.
              </p>
            </div>
          </div>
        </section>
        <section className="sp-faq sp-container" aria-labelledby="faq-title">
          <div className="sp-section-label">
            <h2 id="faq-title">
              <span>03</span> PREGUNTAS FRECUENTES
            </h2>
            <p>Lo que necesitas saber antes de empezar.</p>
          </div>
          <div className="sp-faq-list">
            {offer.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <ChevronDown size={19} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="sp-final-cta sp-container">
          <Flame size={24} />
          <p className="sp-eyebrow">TU SIGUIENTE NIVEL EMPIEZA AHORA</p>
          <h2>{offer.final}</h2>
          <OfferLink>Quiero ver la oferta completa</OfferLink>
          <p className="sp-final-caption">
            <HeartPulse size={15} /> Entrena con dirección. Evoluciona con intención.
          </p>
        </section>
      </main>
      <FunnelFooter />
    </div>
  );
}

export { SalesPage };
