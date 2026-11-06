import { Icon } from "~/components/icons";
import { Reveal } from "~/components/motion";
import { ClosingCta, Eyebrow, PageHero } from "~/components/ui";
import { img, steps } from "~/content/site";
import { seo } from "~/seo";

export function meta() {
  return seo({
    title: "Our Approach — Careknect Limited",
    description:
      "We begin by understanding the healthcare challenge, the people affected by it and the environment in which it occurs.",
    path: "/our-approach",
  });
}

export default function Approach() {
  return (
    <>
      <PageHero
        eyebrow="OUR APPROACH"
        title="Understand the problem. Build with purpose."
        image={img.heroAbout}
      />

      <section className="inner-section purpose-section">
        <div className="wrap purpose-grid">
          <div className="purpose-media">
            <Reveal anim="scale-up" duration={1.8} className="purpose-photo">
              <img src={img.aboutPhoto} alt="" />
            </Reveal>
            <Reveal anim="fade-custom" fromX={-40} className="stat-card">
              <strong>Context</strong>
              <span>before technology.</span>
            </Reveal>
          </div>
          <div>
            <Eyebrow>THE PRINCIPLE</Eyebrow>
            <Reveal as="h2" anim="fade-up-1" className="h2">
              Context before technology.
            </Reveal>
            <Reveal as="p" anim="fade-up-1" className="body-text">
              Practical solutions begin with a precise understanding of people, processes and place.
            </Reveal>
            <Reveal as="p" anim="fade-up-1" className="body-text">
              We begin by understanding the healthcare challenge, the people affected by it and the
              environment in which it occurs. By combining health-sector insight, business analysis,
              user-centred design and responsible technology, we develop solutions that are
              practical, relevant and sustainable.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band-section band-section--steps">
        <div className="band-bg" style={{ backgroundImage: `url("${img.bandBg}")` }} />
        <div className="wrap band-inner">
          <Reveal as="p" anim="fade-up-1" duration={2} className="band-line">
            Four steps, from understanding the context to responsible improvement.
          </Reveal>
          <div className="pathway-grid">
            {steps.map((s, i) => (
              <Reveal
                key={s.number}
                anim="fade-up-1"
                duration={1}
                className={`band-card band-card--compact${i % 2 ? " is-featured" : ""}`}
              >
                <Reveal anim="scale-up-1" duration={1.2} className="band-card-icon">
                  <Icon name={s.icon} size={42} />
                </Reveal>
                <p className="band-card-step">{s.number}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="START A CONVERSATION"
        title="Every effective solution begins with understanding the problem."
      />
    </>
  );
}
