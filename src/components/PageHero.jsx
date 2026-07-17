import Reveal from "./Reveal";
import MeshBackground from "./MeshBackground";
import "./PageHero.css";

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="page-hero">
      <MeshBackground variant="page" />
      <div className="container page-hero-inner">
        <Reveal className="eyebrow" as="span">
          {eyebrow}
        </Reveal>
        <Reveal as="h1" delay={0.08} className="page-hero-title">
          {title}
        </Reveal>
        {subtitle && (
          <Reveal as="p" delay={0.16} className="page-hero-sub">
            {subtitle}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
