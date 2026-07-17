import { useParams, Link, Navigate } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import Reveal from "../components/Reveal";
import PortfolioCard from "../components/PortfolioCard";
import { portfolio } from "../data/site";
import "./PortfolioDetail.css";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const project = portfolio.find((p) => p.slug === slug);

  useSEO({
    title: project ? `${project.title} — Portfolio` : "Project Not Found",
    description: project?.summary ?? "Project not found.",
    path: `/portfolio/${slug}`,
  });

  if (!project) return <Navigate to="/portfolio" replace />;

  const related = portfolio.filter((p) => p.slug !== project.slug && p.categories.some((c) => project.categories.includes(c))).slice(0, 3);
  const fallback = portfolio.filter((p) => p.slug !== project.slug).slice(0, 3);
  const relatedList = related.length ? related : fallback;

  return (
    <>
      <section className="pd-hero">
        <div className="container">
          <Reveal>
            <Link to="/portfolio" className="pd-back" data-cursor-hover>
              ← Back to Portfolio
            </Link>
          </Reveal>

          <div className="pd-head">
            <Reveal variant="left">
              <span className="pd-kicker">{project.categories[0]}</span>
              <h1>{project.title}</h1>
              <p className="pd-summary">{project.summary}</p>
              <div className="pd-cats">
                {project.categories.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary" data-cursor-hover>
                  Visit Live Site ↗
                </a>
              )}
            </Reveal>

            <Reveal variant="right" delay={0.1} className="pd-art" data-index={1}>
              {project.image ? (
                <img src={project.image} alt={`${project.title} website preview`} className="pd-art-img" />
              ) : (
                <span>{project.tag}</span>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pd-meta-section">
        <div className="container pd-meta-grid">
          <Reveal className="glass pd-meta-card">
            <span>Completed</span>
            <strong>2024</strong>
          </Reveal>
          <Reveal delay={0.06} className="glass pd-meta-card">
            <span>Timeline</span>
            <strong>6–8 weeks</strong>
          </Reveal>
          <Reveal delay={0.12} className="glass pd-meta-card">
            <span>Team</span>
            <strong>3–4 specialists</strong>
          </Reveal>
          <Reveal delay={0.18} className="glass pd-meta-card">
            <span>Category</span>
            <strong>{project.categories.join(" · ")}</strong>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">More Work</span>
            <h2 className="section-title">Related Projects</h2>
          </Reveal>
          <div className="portfolio-grid">
            {relatedList.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} variant="scale">
                <PortfolioCard project={p} index={i + 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-inner glass">
          <span className="eyebrow">Ready to Join Our Portfolio?</span>
          <h2 className="cta-title">
            Let's Build <span className="text-gradient">Something Together</span>
          </h2>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary" data-cursor-hover>
              Start Your Project
            </Link>
            <Link to="/services" className="btn btn-ghost" data-cursor-hover>
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
