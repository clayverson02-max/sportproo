import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Infinity as InfinityIcon,
  Play,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { funnel, getOffer, offerPaths } from "@/lib/funnel";
import type { Sport } from "@/lib/offers";

export function ComboBadges() {
  return (
    <div className="sp-badges">
      <span>
        <Zap size={12} fill="currentColor" aria-hidden="true" /> MÁS ELEGIDO
      </span>
      <span>MEJOR VALOR</span>
    </div>
  );
}

export function FunnelHeader({ current }: { current?: Sport }) {
  return (
    <>
      <a href="#contenido-principal" className="sp-skip">
        Saltar al contenido
      </a>
      <header className="sp-header">
        <div className="sp-container sp-header-inner">
          <Link to="/" className="sp-brand" aria-label="SportPro — inicio">
            <span className="sp-brand-icon" aria-hidden="true">
              <Zap size={23} fill="currentColor" />
            </span>
            <span>
              SPORT<span className="sp-brand-light">PRO</span>
              <small>ENTRENA CON UN MÉTODO</small>
            </span>
          </Link>
          <span className="sp-header-tagline">Tu siguiente nivel empieza aquí.</span>
          {current === "ambos" ? (
            <a href="#oferta" className="sp-header-combo">
              Ver mi oferta <ArrowUpRight size={16} />
            </a>
          ) : (
            <Link to="/los-dos-deportes" className="sp-header-combo">
              Conoce el combo <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </header>
    </>
  );
}

export function TrustLine() {
  return (
    <ul className="sp-trust" aria-label="Ventajas de acceso">
      <li>
        <Play size={16} aria-hidden="true" /> Entrenamientos en video
      </li>
      <li>
        <InfinityIcon size={18} aria-hidden="true" /> Acceso de por vida
      </li>
      <li>
        <ShieldCheck size={17} aria-hidden="true" /> 7 días de garantía
      </li>
    </ul>
  );
}

export function FunnelFooter() {
  return (
    <footer className="sp-footer">
      <div className="sp-container sp-footer-inner">
        <Link to="/" className="sp-footer-brand">
          SPORTPRO<span>Tu esfuerzo merece un método.</span>
        </Link>
        <nav aria-label="Métodos de entrenamiento">
          <Link to="/futbol-americano">Fútbol Americano</Link>
          <Link to="/futbol-de-campo">Fútbol de Campo</Link>
          <Link to="/los-dos-deportes">
            Los Dos Deportes <ArrowUpRight size={14} />
          </Link>
        </nav>
        <small>Entrenamiento digital en video.</small>
      </div>
    </footer>
  );
}

export function SportChoice({ id }: { id: Sport }) {
  const offer = getOffer(id);
  const copy = funnel[id];
  const combo = id === "ambos";
  const heroImage = id === "americano" ? offer.images[2]! : offer.images[0]!;
  return (
    <Link to={offerPaths[id]} className={`sp-choice ${combo ? "sp-choice-combo" : ""}`}>
      <div className={`sp-choice-image ${combo ? "sp-split-image" : ""}`}>
        {combo ? (
          <>
            <img
              src={getOffer("americano").images[2]!.src}
              alt="Jugador de fútbol americano con casco y balón"
              width="596"
              height="630"
            />
            <img
              src={getOffer("campo").images[0]!.src}
              alt="Jugador de fútbol de campo practicando un remate"
              width="998"
              height="594"
            />
            <span className="sp-split-plus" aria-hidden="true">
              +
            </span>
          </>
        ) : (
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            width={id === "americano" ? 596 : 998}
            height={id === "americano" ? 630 : 594}
          />
        )}
        <span className="sp-choice-arrow">
          <ArrowUpRight size={23} aria-hidden="true" />
        </span>
        <span className="sp-choice-image-label">
          {combo
            ? "FUERZA + TÉCNICA"
            : id === "americano"
              ? "FUERZA + EXPLOSIVIDAD"
              : "TÉCNICA + CONTROL"}
        </span>
      </div>
      <div className="sp-choice-body">
        {combo ? (
          <ComboBadges />
        ) : (
          <span className="sp-choice-eyebrow">TU DEPORTE. TU MÉTODO.</span>
        )}
        <h2>{offer.title}</h2>
        <p>{copy.card}</p>
        <div className="sp-choice-stat">
          <strong>
            {combo
              ? "2 métodos completos"
              : id === "americano"
                ? "+500 entrenamientos"
                : "+2.000 ejercicios"}
          </strong>
          <span>
            {combo
              ? "La preparación más completa"
              : id === "americano"
                ? "Gimnasio, campo y nutrición"
                : "+250 sesiones en video"}
          </span>
        </div>
        <span className={`sp-button ${combo ? "sp-button-gold" : "sp-button-outline"}`}>
          {combo ? "Quiero los dos métodos" : "Descubrir el método"}
          <ArrowRight size={18} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
