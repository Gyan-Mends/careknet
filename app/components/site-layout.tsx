import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { contact, footerBlurb, img, legal, nav, products } from "~/content/site";
import { Icon } from "./icons";
import { Reveal } from "./motion";

const LOGO = "/images/brand/careknect-logo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div
        className="header-blob"
        style={{ backgroundImage: `url("${img.blob}")` }}
        aria-hidden="true"
      />
      <Link to="/" className="header-logo" aria-label="Careknect Limited, home">
        <img src={LOGO} alt="Careknect Limited" width={3900} height={1050} />
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? "close" : "menu"} size={30} />
      </button>
      <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`} aria-label="Main">
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === "/"} className="nav-link">
            {item.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn--primary nav-cta">
          Connect With Us ↗
        </Link>
      </nav>
    </header>
  );
}

function FooterTitle({ children }: { children: string }) {
  return (
    <h2 className="footer-title">
      <span className="eyebrow-ring" aria-hidden="true" />
      {children}
    </h2>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-panel">
          <div className="footer-grid">
            <Reveal anim="fade-up" duration={1} className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="Careknect Limited, home">
                <img src={LOGO} alt="Careknect Limited" width={3900} height={1050} loading="lazy" />
              </Link>
              <p>{footerBlurb}</p>
              <div className="footer-socials">
                <a href={contact.emailHref} aria-label={`Email ${contact.email}`}>
                  <Icon name="mail" size={18} />
                </a>
                <a href={contact.phoneHref} aria-label={`Call ${contact.phone}`}>
                  <Icon name="phone" size={18} />
                </a>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Message us on WhatsApp"
                >
                  <Icon name="whatsapp" size={18} />
                </a>
              </div>
            </Reveal>
            <Reveal anim="fade-up" duration={1} className="footer-col">
              <FooterTitle>Explore</FooterTitle>
              <ul>
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal anim="fade-up" duration={1} className="footer-col">
              <FooterTitle>Products</FooterTitle>
              <ul>
                {products.map((p) => (
                  <li key={p.id}>
                    <Link to={`/products#${p.id}`}>{p.name}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/products#services">Professional Services</Link>
                </li>
              </ul>
            </Reveal>
            <Reveal anim="fade-up" duration={1} className="footer-col">
              <FooterTitle>Contact Us</FooterTitle>
              <ul>
                <li>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </li>
                <li>
                  <a href={contact.emailHref}>{contact.email}</a>
                </li>
                <li className="footer-address">{contact.address}</li>
              </ul>
            </Reveal>
          </div>
        </div>
        <div className="footer-legal">
          <p>© 2026 Careknect Limited. Care. Better connected.</p>
          <ul>
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`scroll-top${show ? " is-visible" : ""}`}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Icon name="up" size={16} />
    </button>
  );
}

export default function SiteLayout() {
  return (
    <div className="site">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
