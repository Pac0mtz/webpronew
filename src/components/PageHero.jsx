import Reveal from "./Reveal";
import SplitText from "./SplitText";
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
        <SplitText as="h1" delay={0.1} className="page-hero-title">
          {title}
        </SplitText>
        {subtitle && (
          <Reveal as="p" delay={0.3} className="page-hero-sub">
            {subtitle}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
