import { Link } from "react-router";
import { Track, useLoop } from "~/components/carousel";
import { Icon } from "~/components/icons";
import { Heart, Reveal, ScrollMotion } from "~/components/motion";
import { ArrowButton, Btn, ClosingCta, Eyebrow } from "~/components/ui";
import {
  contact,
  img,
  pillars,
  products,
  services,
  steps,
  values,
  type IconName,
} from "~/content/site";

export function meta() {
  return [
    { title: "Careknect Limited — Care. Better connected." },
    {
      name: "description",
      content:
        "Careknect is a digital health company developing practical solutions for healthcare access, care coordination and facility management.",
    },
  ];
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-art" aria-hidden="true">
        <ScrollMotion moveIn="moveHorizontal" moveOut="scale" x={70} scale={0.7} className="shape shape--yellow">
          <Reveal anim="fade-custom" fromX={-60} duration={1.7} className="shape-fill" />
        </ScrollMotion>
        <ScrollMotion moveOut="scale" scale={0.8} className="shape shape--cyan">
          <Reveal anim="fade-custom" fromY={60} duration={1.8} className="shape-fill" />
        </ScrollMotion>
        <ScrollMotion moveIn="rotateIn" moveOut="moveHorizontal" x={-30} rotate={20} className="hero-photo">
          <Reveal anim="scale-custom" duration={1.8}>
            <img src={img.heroPhoto} alt="" />
          </Reveal>
        </ScrollMotion>
        <ScrollMotion moveOut="rotateOut" rotate={30} className="heart heart--hero-top">
          <Reveal anim="pulse-2" duration={1} ease="back">
            <img src={img.heartTop} alt="" />
          </Reveal>
        </ScrollMotion>
        <ScrollMotion moveOut="rotateIn" rotate={15} className="heart heart--hero-bottom">
          <Reveal anim="pulse-2" duration={1} ease="back">
            <img src={img.heartBottom} alt="" />
          </Reveal>
        </ScrollMotion>
      </div>

      <div className="hero-panel">
        <Eyebrow tone="yellow">CAREKNECT LIMITED</Eyebrow>
        <Reveal as="h1" anim="fade-up-1">
          Care. Better connected.
        </Reveal>
        <Reveal as="p" anim="fade-up-1" className="hero-lead">
          Careknect is a digital health company developing practical solutions for healthcare
          access, care coordination and facility management.
        </Reveal>
        <Reveal anim="fade-up-1" className="hero-actions">
          <Btn to="/products">Explore Our Products</Btn>
          <Btn to="/contact" variant="ghost">
            Work With Us ↗
          </Btn>
        </Reveal>
      </div>

      <Reveal anim="slide-right" duration={1} className="hero-follow">
        <div className="hero-follow-row">
          <span className="hero-follow-label">Connect</span>
          <span className="hero-follow-line" aria-hidden="true" />
          <a href={contact.emailHref} aria-label={`Email ${contact.email}`}>
            <Icon name="mail" size={22} />
          </a>
          <a href={contact.phoneHref} aria-label={`Call ${contact.phone}`}>
            <Icon name="phone" size={22} />
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Message us on WhatsApp"
          >
            <Icon name="whatsapp" size={22} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Belief() {
  return (
    <section className="split-about">
      <div className="heart heart--about-static" aria-hidden="true">
        <Reveal anim="pulse-2">
          <img src={img.heartSmall} alt="" />
        </Reveal>
      </div>
      <div className="wrap split-about-grid">
        <div className="split-about-copy">
          <Eyebrow>OUR BELIEF</Eyebrow>
          <Reveal as="h2" anim="fade-up-1" className="h2">
            No one should lose their way between needing care and receiving it.
          </Reveal>
          <Reveal as="p" anim="fade-up-1" className="body-text">
            Careknect combines health-systems expertise, trusted service information and
            purposeful technology to help people find, access and continue the care they need.
          </Reveal>
          <Reveal anim="fade-up-1">
            <Btn to="/our-approach">Discover Our Approach</Btn>
          </Reveal>
        </div>
        <div className="about-collage">
          <Reveal
            anim="scale-up"
            duration={1.8}
            className="about-photo"
            style={{ backgroundImage: `url("${img.aboutPhoto}")` }}
          />
          <ScrollMotion moveIn="moveHorizontal" moveOut="moveHorizontal" x={20} className="quote-card-pos">
            <Reveal anim="fade-custom" fromX={40} duration={1.7} className="quote-card">
              <span className="quote-badge" aria-hidden="true">
                “
              </span>
              <p>Context before technology.</p>
              <strong>The principle behind our work</strong>
            </Reveal>
          </ScrollMotion>
          <ScrollMotion moveIn="moveHorizontal" moveOut="moveHorizontal" x={-20} className="name-card-pos">
            <Reveal anim="fade-custom" fromX={-40} className="name-card">
              <span className="name-card-icon">
                <Icon name="heart" size={46} />
              </span>
              <span>
                <strong>Careknect Limited</strong>
                <small>Ghanaian digital health</small>
              </span>
            </Reveal>
          </ScrollMotion>
        </div>
      </div>
    </section>
  );
}

function ProductCarousel() {
  const loop = useLoop(products.length);
  const items = products.map((p, i) => (
    <article className="product-card" key={p.id}>
      <div className="product-card-media">
        <img src={p.image} alt="" draggable={false} />
      </div>
      <span className={`product-card-icon${i % 3 === 1 ? " is-left" : ""}`}>
        <Icon name={p.icon} size={44} />
      </span>
      <div className="product-card-body">
        <p className="card-kicker">
          {p.name}
          {p.tag ? <em> · {p.tag}</em> : null}
        </p>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <Link to={p.cta.to} className="text-link">
          {p.cta.label} <Icon name="right" size={16} />
        </Link>
      </div>
    </article>
  ));

  return (
    <section className="products-section">
      <div className="center-head">
        <Eyebrow>OUR PRODUCTS</Eyebrow>
        <Reveal as="h2" anim="fade-up-1" className="h2">
          Purpose-built digital health products.
        </Reveal>
        <Reveal as="p" anim="fade-up-1" className="body-text">
          Each product is designed around the needs, workflows and operating realities of its
          intended users.
        </Reveal>
      </div>
      <Reveal anim="fade-up" duration={1.7} className="products-carousel">
        <ArrowButton dir="left" onClick={loop.prev} label="Previous product" />
        <Track loop={loop} items={items} label="Careknect products" className="track--three" />
        <ArrowButton dir="right" onClick={loop.next} label="Next product" />
      </Reveal>
      <Reveal anim="fade-up" className="center-action">
        <Btn to="/products">Explore All Products and Services</Btn>
      </Reveal>
      <Heart src={img.heartLarge} className="heart--products" direction="rotateIn" />
    </section>
  );
}

const pathways: {
  title: string;
  text: string;
  icon: IconName;
  label: string;
  to: string;
  featured?: boolean;
}[] = [
  {
    title: "Product Demonstrations",
    text: "See Careknect Clinic or Careknect Coordinate in a private demonstration.",
    icon: "demo",
    label: "Request a Demonstration",
    to: "/contact?enquiry=coordinate",
  },
  {
    title: "Professional Services",
    text: "Align your people, processes and technology with structured support.",
    icon: "services",
    label: "Explore Our Services",
    to: "/products#services",
    featured: true,
  },
  {
    title: "Partnerships",
    text: "Work with us on practical solutions that can be adopted and sustained.",
    icon: "partner",
    label: "Explore a Partnership",
    to: "/contact?enquiry=partnership",
  },
];

function Pathways() {
  return (
    <section className="band-section">
      <div className="band-bg" style={{ backgroundImage: `url("${img.bandBg}")` }} />
      <div className="wrap band-inner">
        <Reveal as="p" anim="fade-up-1" duration={2} className="band-line">
          Start with a conversation. Call us at{" "}
          <a href={contact.phoneHref}>{contact.phone}</a> or send an enquiry online.
        </Reveal>
        <div className="band-cards">
          {pathways.map((p) => (
            <Reveal
              key={p.title}
              anim="fade-up-1"
              duration={1}
              className={`band-card${p.featured ? " is-featured" : ""}`}
            >
              <Reveal anim="scale-up-1" duration={1.2} className="band-card-icon">
                <Icon name={p.icon} size={46} />
              </Reveal>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Reveal anim="scale-up-1" duration={1.2}>
                <Btn to={p.to} variant={p.featured ? "blue" : "yellow"}>
                  {p.label}
                </Btn>
              </Reveal>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Identity() {
  return (
    <section className="identity-section">
      <div className="wrap identity-grid">
        <div className="identity-collage">
          <ScrollMotion moveOut="moveHorizontal" x={30} className="identity-photo identity-photo--a">
            <Reveal anim="fade-custom" fromX={-50} duration={2}>
              <img src={img.roomPhoto} alt="" loading="lazy" />
            </Reveal>
          </ScrollMotion>
          <ScrollMotion moveOut="moveHorizontal" x={-30} className="identity-photo identity-photo--b">
            <Reveal anim="fade-custom" fromX={50} duration={2}>
              <img src={img.nursePhoto} alt="" loading="lazy" />
            </Reveal>
          </ScrollMotion>
          <ScrollMotion moveOut="moveHorizontal" x={50} className="ring-badge-pos">
            <Reveal anim="fade-down" duration={1} className="ring-badge">
              <span className="ring-dial">
                <svg className="ring-track" viewBox="0 0 72 72" aria-hidden="true">
                  <circle className="ring-arc" cx="36" cy="36" r="33" pathLength={100} />
                </svg>
                <Icon name="heart" size={28} />
              </span>
              <strong>Care. Better connected.</strong>
            </Reveal>
          </ScrollMotion>
        </div>
        <div className="identity-copy">
          <Eyebrow>OUR IDENTITY</Eyebrow>
          <Reveal as="h2" anim="fade-up-1" className="h2">
            Built for healthcare. Designed for practical impact.
          </Reveal>
          <Reveal as="p" anim="fade-up" duration={1.7} className="body-text">
            We work with healthcare providers, professionals and organisations to develop
            practical solutions that can be adopted and sustained.
          </Reveal>
          <ul className="icon-list">
            {pillars.map((p) => (
              <Reveal as="li" key={p.title} anim="fade-up" duration={1.7}>
                <span className="icon-tile">
                  <Icon name={p.icon} size={32} />
                </span>
                {p.title}
              </Reveal>
            ))}
          </ul>
          <Reveal anim="fade-up">
            <Btn to="/about">About Careknect</Btn>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyWeExist() {
  const loop = useLoop(values.length);
  const items = values.map((v) => (
    <article className="value-card" key={v.title}>
      <div className="value-card-photo">
        <img src={v.image} alt="" draggable={false} />
      </div>
      <div className="value-card-bar">
        <div>
          <h3>{v.title}</h3>
          <p>{v.text}</p>
        </div>
        <span className="value-card-number">{v.number}</span>
      </div>
    </article>
  ));

  return (
    <section className="blue-section">
      <Reveal anim="rotate-down-left" duration={2.3} className="blue-cloud blue-cloud--a">
        <img src={img.cloud} alt="" aria-hidden="true" />
      </Reveal>
      <div className="blue-head">
        <div>
          <Eyebrow tone="yellow">WHY WE EXIST</Eyebrow>
          <Reveal as="h2" anim="fade-up-1" duration={1.3} className="h2 h2--white">
            To make digital health work for real healthcare needs.
          </Reveal>
        </div>
        <Reveal anim="fade-up-1" duration={1.3} className="blue-head-text">
          <p>
            Healthcare providers, care teams and the people they serve face different challenges
            — from inefficient facility processes and fragmented care coordination to difficulty
            finding appropriate services.
          </p>
          <p>
            Careknect develops focused digital health products for these distinct needs, combining
            health-sector understanding with practical and purposeful technology.
          </p>
        </Reveal>
      </div>
      <Reveal anim="fade-up-1" duration={1.3} className="values-carousel">
        <Track loop={loop} items={items} label="Careknect values" className="track--peek" />
        <div className="bullets">
          {values.map((v, i) => (
            <button
              key={v.title}
              type="button"
              className={i === loop.active ? "is-active" : ""}
              aria-label={`Show ${v.title}`}
              aria-current={i === loop.active || undefined}
              onClick={() => loop.goTo(i)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function ApproachCarousel() {
  const loop = useLoop(steps.length);
  const items = steps.map((s) => (
    <article className="step-card" key={s.number}>
      <div className="step-card-photo">
        <img src={s.image} alt="" draggable={false} />
      </div>
      <span className="step-card-number" aria-hidden="true">
        {s.number}
      </span>
      <p>{s.text}</p>
      <h3>{s.title}</h3>
      <small>Step {s.number}</small>
    </article>
  ));

  return (
    <section className="steps-section">
      <Reveal anim="fade-up-1" duration={1.3} className="steps-track-wrap">
        <Track loop={loop} items={items} label="Our four-step approach" className="track--two" />
      </Reveal>
      <div className="steps-copy">
        <Eyebrow>OUR APPROACH</Eyebrow>
        <Reveal as="h2" anim="fade-up-1" className="h2">
          Understand the problem. Build with purpose.
        </Reveal>
        <Reveal as="p" anim="fade-up-1" className="body-text">
          We begin by understanding the healthcare challenge, the people affected by it and the
          environment in which it occurs.
        </Reveal>
        <Reveal anim="fade-up-1" duration={1.3} className="steps-arrows">
          <ArrowButton dir="left" onClick={loop.prev} label="Previous step" />
          <ArrowButton dir="right" onClick={loop.next} label="Next step" />
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section">
      <div className="center-head">
        <Eyebrow>PROFESSIONAL SERVICES</Eyebrow>
        <Reveal as="h2" anim="fade-up-1" className="h2">
          Better processes. More effective digital health.
        </Reveal>
      </div>
      <div className="wrap">
        <Reveal anim="fade-up-1" duration={2.3} className="service-grid">
          {services.map((s) => (
            <article className="service-card" key={s.number}>
              <img src={s.image} alt="" loading="lazy" />
              <div>
                <p className="card-kicker">Service {s.number}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </Reveal>
        <Reveal anim="fade-up" className="center-action">
          <Btn to="/products#services">Explore All Products and Services</Btn>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Belief />
      <ProductCarousel />
      <Pathways />
      <Identity />
      <WhyWeExist />
      <ApproachCarousel />
      <ClosingCta
        eyebrow="START A CONVERSATION"
        title="Let’s solve healthcare challenges together."
      />
      <Services />
    </>
  );
}
