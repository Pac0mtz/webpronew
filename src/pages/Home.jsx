import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useSEO from "../hooks/useSEO";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import Marquee from "../components/Marquee";
import PortfolioCard from "../components/PortfolioCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import MeshBackground from "../components/MeshBackground";
import Magnetic from "../components/Magnetic";
import { stats, industries, services, portfolio, testimonials, process, whyUs } from "../data/site";
import "./Home.css";

export default function Home() {
  useSEO({
    title: "Chicago Web Design, Development & SEO Agency",
    description:
      "Web Pro Chicago builds fast, modern, high-converting websites for Chicago businesses. Web design, development, SEO, and digital marketing from a local team.",
    path: "/",
  });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featured = portfolio.filter((p) => p.featured).concat(portfolio.slice(0, 3));

  return (
    <>
      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <MeshBackground variant="hero" />
        <motion.div className="container hero-inner" style={{ y: heroY, opacity: heroOpacity }}>
          <Reveal variant="fade" className="eyebrow" as="span">
            Chicago Web Agency
          </Reveal>
          <h1 className="hero-title">
            <Reveal as="span" className="hero-line" delay={0.05}>
              Web Design
            </Reveal>
            <Reveal as="span" className="hero-line text-gradient" delay={0.15}>
              in Chicago
            </Reveal>
          </h1>
          <Reveal as="p" delay={0.25} className="hero-sub">
            Chicago locals who build websites that actually work. No BS, just results your neighbors already trust.
          </Reveal>
          <Reveal as="div" delay={0.35} className="hero-actions">
            <Magnetic>
              <Link to="/contact" className="btn btn-primary" data-cursor-hover>
                Get Started
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/portfolio" className="btn btn-ghost" data-cursor-hover>
                View Our Work
              </Link>
            </Magnetic>
          </Reveal>
        </motion.div>

        <Reveal variant="fade" delay={0.5} className="hero-marquee">
          <Marquee items={industries} />
        </Reveal>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat-item">
              <span className="stat-value">
                {typeof s.value === "number" && s.suffix !== "–4wk" ? <Counter value={s.value} suffix={s.suffix} /> : `${s.value}${s.suffix}`}
              </span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal className="eyebrow" as="span">
              01 — Services
            </Reveal>
            <div className="section-head-row">
              <Reveal as="h2" className="section-title">
                What We Do
              </Reveal>
              <Reveal delay={0.1}>
                <Link to="/services" className="btn btn-ghost btn-sm" data-cursor-hover>
                  All Services
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08} className="service-card glass">
                <span className="service-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="service-category">{s.category}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <Reveal className="eyebrow" as="span">
              02 — Portfolio
            </Reveal>
            <div className="section-head-row">
              <Reveal as="h2" className="section-title">
                Featured Work
              </Reveal>
              <Reveal delay={0.1}>
                <Link to="/portfolio" className="btn btn-ghost btn-sm" data-cursor-hover>
                  All Projects
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="portfolio-grid">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} variant="scale">
                <PortfolioCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container why-grid">
          <div className="why-copy">
            <Reveal className="eyebrow" as="span">
              03 — Why Us
            </Reveal>
            <Reveal as="h2" className="section-title">
              Built for <span className="text-gradient">Chicago Business</span>
            </Reveal>
            <Reveal as="p" delay={0.1} className="why-sub">
              We're not some outsourced agency halfway across the country. We're your Chicago neighbors who know
              exactly what it takes to compete in this city.
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/contact" className="btn btn-primary" data-cursor-hover>
                Work With Us
              </Link>
            </Reveal>
          </div>

          <div className="why-list">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06} className="why-item">
                <span className="why-index">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head center">
            <Reveal className="eyebrow" as="span">
              04 — Testimonials
            </Reveal>
            <Reveal as="h2" className="section-title">
              What Clients Say
            </Reveal>
          </div>
          <Reveal variant="scale">
            <TestimonialCarousel items={testimonials} />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <Reveal className="eyebrow" as="span">
              05 — Process
            </Reveal>
            <Reveal as="h2" className="section-title">
              How We Work
            </Reveal>
          </div>

          <div className="process-grid">
            {process.map((p, i) => (
              <Reveal key={p.tag} delay={i * 0.1} className="process-item">
                <span className="process-tag">{p.tag}</span>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container cta-inner glass">
          <Reveal className="eyebrow" as="span">
            Ready to Grow?
          </Reveal>
          <Reveal as="h2" className="cta-title">
            Let's Build <span className="text-gradient">Something Great</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="cta-sub">
            Stop watching your competition take the top spots. Let's put your business where it belongs.
          </Reveal>
          <Reveal delay={0.2} className="hero-actions">
            <Magnetic>
              <Link to="/contact" className="btn btn-primary" data-cursor-hover>
                Get a Free Consultation
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/portfolio" className="btn btn-ghost" data-cursor-hover>
                See Our Work
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}
