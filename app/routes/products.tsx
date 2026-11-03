import { Icon } from "~/components/icons";
import { Reveal, ScrollMotion } from "~/components/motion";
import { Btn, ClosingCta, Eyebrow, PageHero } from "~/components/ui";
import { img, products, services } from "~/content/site";

export function meta() {
  return [
    { title: "Products & Services — Careknect Limited" },
    {
      name: "description",
      content:
        "Focused digital health products and professional services for healthcare providers, care teams, organisations and the people they serve.",
    },
  ];
}

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCTS & SERVICES"
        title="Digital health solutions built for real healthcare needs."
        image={img.heroContact}
      />

      <section className="inner-section">
        <div className="center-head center-head--wide">
          <Eyebrow>OUR PRODUCTS</Eyebrow>
          <Reveal as="h2" anim="fade-up-1" className="h2">
            Technology designed for distinct healthcare needs.
          </Reveal>
          <Reveal as="p" anim="fade-up-1" className="body-text">
            Careknect develops independent digital health products that address distinct healthcare
            challenges and serve different stakeholders across the health system. Each product has
            its own purpose, users and application.
          </Reveal>
        </div>

        <div className="wrap product-rows">
          {products.map((p, i) => (
            <article id={p.id} className={`product-row${i % 2 ? " is-flipped" : ""}`} key={p.id}>
              <div className="product-row-media">
                <ScrollMotion moveOut="moveHorizontal" x={i % 2 ? -30 : 30} className="product-row-photo">
                  <Reveal anim="fade-custom" fromX={i % 2 ? 50 : -50} duration={2}>
                    <img src={p.image} alt="" loading="lazy" />
                  </Reveal>
                </ScrollMotion>
                <Reveal anim="fade-down" duration={1} className="product-row-badge">
                  <span className="band-card-icon">
                    <Icon name={p.icon} size={42} />
                  </span>
                  <strong>{p.name}</strong>
                </Reveal>
              </div>
              <div>
                <Eyebrow>
                  {p.number} — {p.name.toUpperCase()}
                </Eyebrow>
                {p.tag ? (
                  <Reveal anim="scale-up-1" duration={1.2} className="product-tag">
                    {p.tag}
                  </Reveal>
                ) : null}
                <Reveal as="h3" anim="fade-up-1" className="h3">
                  {p.title}
                </Reveal>
                <Reveal as="p" anim="fade-up-1" className="body-text">
                  {p.summary}
                </Reveal>
                <ul className="check-list">
                  {p.features.map((f) => (
                    <Reveal as="li" key={f} anim="fade-up" duration={1.2}>
                      <span className="check-tile">
                        <Icon name="check" size={16} />
                      </span>
                      {f}
                    </Reveal>
                  ))}
                </ul>
                <Reveal anim="fade-up-1">
                  <Btn to={p.cta.to}>{p.cta.label}</Btn>
                </Reveal>
              </div>
            </article>
          ))}
        </div>

        <Reveal anim="fade-up-1" className="wrap product-note">
          <p>
            <strong>Product information note</strong>
            Detailed product capabilities, demonstrations and implementation options are available
            to prospective clients and partners.
          </p>
        </Reveal>
      </section>

      <section id="services" className="blue-section blue-section--services">
        <Reveal anim="rotate-down-left" duration={2.3} className="blue-cloud blue-cloud--a">
          <img src={img.cloud} alt="" aria-hidden="true" />
        </Reveal>
        <div className="blue-head">
          <div>
            <Eyebrow tone="yellow">PROFESSIONAL SERVICES</Eyebrow>
            <Reveal as="h2" anim="fade-up-1" duration={1.3} className="h2 h2--white">
              Better processes. More effective digital health.
            </Reveal>
          </div>
          <Reveal anim="fade-up-1" duration={1.3} className="blue-head-text">
            <p>
              Careknect helps healthcare organisations understand how their services and operations
              currently work, identify process gaps and design practical improvements.
            </p>
            <p>
              We provide structured support before, during and after the introduction of digital
              health solutions—helping organisations align their people, processes and technology.
            </p>
          </Reveal>
        </div>
        <div className="wrap pathway-grid">
          {services.map((s, i) => (
            <Reveal
              key={s.number}
              anim="fade-up-1"
              duration={1}
              className={`band-card band-card--compact${i % 2 ? " is-featured" : ""}`}
            >
              <Reveal anim="scale-up-1" duration={1.2} className="band-card-icon">
                <Icon name={s.icon} size={42} />
              </Reveal>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta
        eyebrow="START A CONVERSATION"
        title="Ready to explore a Careknect product or professional service?"
      />
    </>
  );
}
