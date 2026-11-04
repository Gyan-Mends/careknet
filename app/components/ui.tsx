import type { ReactNode } from "react";
import { Link } from "react-router";
import { img } from "~/content/site";
import { Icon } from "./icons";
import { Reveal, Watermark } from "./motion";

/** Small label with the template's hollow ring, sliding up from behind a mask. */
export function Eyebrow({
  children,
  tone = "navy",
}: {
  children: ReactNode;
  tone?: "navy" | "light";
}) {
  return (
    <Reveal anim="slide-bot" duration={1} className={`eyebrow eyebrow--${tone}`}>
      <p className="eyebrow-text">
        <span className="eyebrow-ring" aria-hidden="true" />
        {children}
      </p>
    </Reveal>
  );
}

export function Btn({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  return (
    <Link to={to} className={`btn btn--${variant}`}>
      {children}
    </Link>
  );
}

/** Inner-page header: tinted photo, white blob and page title. */
export function PageHero({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  image: string;
}) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url("${image}")` }}>
      <div className="page-hero-tint" />
      <Watermark className="watermark--page-hero" />
      <div className="wrap page-hero-copy">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <Reveal as="h1" anim="fade-up-1">
          {title}
        </Reveal>
      </div>
    </section>
  );
}

/** The template's newsletter panel, used here as the closing call to action. */
export function ClosingCta({
  eyebrow,
  title,
  text,
  label = "Start a Conversation",
  to = "/contact",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  label?: string;
  to?: string;
}) {
  return (
    <section className="cta-section">
      <div className="wrap">
        <div className="cta-panel">
          <Watermark className="watermark--cta" />
          <div className="cta-copy">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <Reveal as="h2" anim="fade-up-1">
              {title}
            </Reveal>
            {text ? (
              <Reveal as="p" anim="fade-up-1" duration={1.3}>
                {text}
              </Reveal>
            ) : null}
            <Reveal anim="fade-up-1" className="cta-action">
              <Btn to={to}>{label}</Btn>
            </Reveal>
          </div>
          <Reveal anim="fade-right-1" className="cta-person">
            <img src={img.doctorCutout} alt="" loading="lazy" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ArrowButton({
  dir,
  onClick,
  label,
}: {
  dir: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  return (
    <button type="button" className="arrow" onClick={onClick} aria-label={label}>
      <Icon name={dir} size={26} />
    </button>
  );
}
