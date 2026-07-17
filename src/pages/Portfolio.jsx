import { useMemo, useState } from "react";
import useSEO from "../hooks/useSEO";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import PortfolioCard from "../components/PortfolioCard";
import { portfolio } from "../data/site";
import "./Portfolio.css";

export default function Portfolio() {
  useSEO({
    title: "Portfolio — Real Projects for Chicago Businesses",
    description:
      "Browse real projects Web Pro Chicago has built — restaurants, contractors, healthcare, e-commerce, and personal brands across Chicago.",
    path: "/portfolio",
  });

  const categories = useMemo(() => {
    const set = new Set();
    portfolio.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return ["All Projects", ...Array.from(set).sort()];
  }, []);

  const [active, setActive] = useState("All Projects");

  const filtered = active === "All Projects" ? portfolio : portfolio.filter((p) => p.categories.includes(active));

  return (
    <>
      <PageHero
        eyebrow="Our Work Speaks Loud"
        title="Featured Projects"
        subtitle="Real projects, real results. See what we've built for Chicago businesses just like yours."
      />

      <section className="section portfolio-page">
        <div className="container">
          <Reveal className="filter-row">
            {categories.map((c) => (
              <button key={c} className={`filter-pill ${active === c ? "active" : ""}`} onClick={() => setActive(c)} data-cursor-hover>
                {c}
              </button>
            ))}
          </Reveal>

          <div className="portfolio-grid portfolio-grid-full">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 6) * 0.05} variant="scale">
                <PortfolioCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
