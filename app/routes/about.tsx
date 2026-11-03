import { useState } from "react";
import { Icon } from "~/components/icons";
import { Heart, Reveal } from "~/components/motion";
import { Btn, ClosingCta, Eyebrow, PageHero } from "~/components/ui";
import { img, pillars } from "~/content/site";

export function meta() {
  return [
    { title: "About Careknect — Practical technology for better healthcare" },
    {
      name: "description",
      content:
        "Careknect Limited is a Ghanaian digital health company developing focused solutions for healthcare access, care coordination and facility management.",
    },
  ];
}

function Accordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {pillars.map((p, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={p.title} anim="fade-up" duration={1.2} className={`accordion-item${isOpen ? " is-open" : ""}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>
                  <small>{p.label}</small>
                  {p.title}
                </span>
                <Icon name="chevron" size={22} />
              </button>
            </h3>
            <div className="accordion-panel">
              <div>
                <p>{p.text}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT CAREKNECT"
        title="Practical technology for better healthcare."
        image={img.heroAbout}
      />

      <section className="inner-section purpose-section">
        <Heart src={img.heartLarge} className="heart--purpose" direction="rotateOut" />
        <div className="wrap purpose-grid">
          <div className="purpose-media">
            <Reveal anim="scale-up" duration={1.8} className="purpose-photo">
              <img src={img.team4} alt="" />
            </Reveal>
            <Reveal anim="fade-custom" fromX={-40} className="stat-card">
              <strong>Care.</strong>
              <span>Better connected.</span>
            </Reveal>
          </div>
          <div>
            <Eyebrow>OUR PURPOSE</Eyebrow>
            <Reveal as="h2" anim="fade-up-1" className="h2">
              A clear purpose. A practical focus.
            </Reveal>
            <Reveal as="p" anim="fade-up-1" className="body-text">
              Healthcare challenges differ across people, organisations and service settings.
              Effective digital health solutions must therefore begin with a clear understanding of
              the specific problem and the people experiencing it.
            </Reveal>
            <Reveal as="p" anim="fade-up-1" className="body-text">
              Careknect combines health-sector knowledge, process thinking and responsible
              technology to develop practical products that improve healthcare access, care
              coordination and facility management.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="wrap vision-grid">
          <div>
            <Eyebrow>OUR VISION</Eyebrow>
            <Reveal as="h2" anim="fade-up-1" className="h2 h2--small">
              A future where digital innovation enables more accessible, efficient and responsive
              healthcare.
            </Reveal>
            <Reveal anim="fade-up-1">
              <Btn to="/contact" variant="blue">
                Connect With Us
              </Btn>
            </Reveal>
          </div>
          <div className="vision-columns">
            <Reveal as="p" anim="fade-up" className="body-text">
              Careknect Limited is a Ghanaian digital health company developing focused solutions
              for healthcare access, care coordination and facility management.
            </Reveal>
            <Reveal as="p" anim="fade-up" className="body-text">
              Our products address distinct challenges faced by healthcare providers, care teams
              and the people they serve.
            </Reveal>
            <Reveal anim="scale-up" duration={1.8} className="vision-photo">
              <img src={img.bedside} alt="" loading="lazy" />
            </Reveal>
            <Reveal anim="scale-up" duration={1.8} className="vision-photo">
              <img src={img.clipboard} alt="" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grey-section">
        <Heart src={img.heartSmall} className="heart--grey" direction="rotateIn" />
        <div className="wrap accordion-grid">
          <Accordion />
          <div>
            <Eyebrow>GHANAIAN DIGITAL HEALTH</Eyebrow>
            <Reveal as="h2" anim="fade-up-1" className="h2">
              Focused solutions. Real healthcare needs.
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="CONNECT WITH US"
        title="Let’s build practical solutions for better healthcare."
        label="Connect With Us"
      />
    </>
  );
}
