import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { services } from "../data/site";
import "./Services.css";

export default function Services() {
  useSEO({
    title: "Services — Web Design, Development, SEO & More",
    description:
      "Web design, web development, mobile apps, SEO & marketing, Google Ads, and site maintenance — everything a Chicago business needs to win online.",
    path: "/services",
  });

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services Built to Grow Your Business"
        subtitle="From first sketch to ongoing support — everything your business needs to show up, stand out, and convert online."
      />

      <section className="section services-list">
        <div className="container">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05} className="service-row glass">
              <span className="service-row-tag">{s.tag}</span>
              <div className="service-row-body">
                <span className="service-row-cat">{s.category}</span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <ul className="service-row-points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="btn btn-ghost btn-sm service-row-cta" data-cursor-hover>
                Get Started
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-inner glass">
          <Reveal className="eyebrow" as="span">
            Not Sure Where to Start?
          </Reveal>
          <Reveal as="h2" className="cta-title">
            Let's Talk <span className="text-gradient">Strategy</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="cta-sub">
            Tell us about your business and we'll map out exactly what you need — no pressure, no jargon.
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="btn btn-primary" data-cursor-hover>
              Get a Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
