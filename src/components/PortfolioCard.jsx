import { Link } from "react-router-dom";
import "./PortfolioCard.css";

export default function PortfolioCard({ project, index = 0 }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="pf-card glass" data-cursor-hover>
      <div className="pf-card-art" data-index={(index % 6) + 1}>
        {project.image ? (
          <img src={project.image} alt={`${project.title} website preview`} loading="lazy" className="pf-card-img" />
        ) : null}
        <span className="pf-card-tag">{project.tag}</span>
      </div>
      <div className="pf-card-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="pf-card-cats">
          {project.categories.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <span className="pf-card-link">
          View Details <i>→</i>
        </span>
      </div>
    </Link>
  );
}
