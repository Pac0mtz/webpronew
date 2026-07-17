import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import Reveal from "../components/Reveal";
import "./NotFound.css";

export default function NotFound() {
  useSEO({ title: "Page Not Found", description: "The page you're looking for doesn't exist.", path: "/404" });

  return (
    <section className="notfound">
      <div className="container notfound-inner">
        <Reveal variant="scale" className="notfound-code text-gradient">
          404
        </Reveal>
        <Reveal delay={0.1} as="h1">
          Looks like this page took a wrong turn on the Kennedy.
        </Reveal>
        <Reveal delay={0.2}>
          <Link to="/" className="btn btn-primary" data-cursor-hover>
            Back to Home
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
