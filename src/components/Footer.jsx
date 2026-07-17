import { Link } from "react-router-dom";
import { business } from "../data/site";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="nav-logo-mark">WPC</span>
            <p className="footer-tagline">
              Chicago locals who build websites that actually work. Web design, development, SEO & digital
              marketing for local businesses.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Get in touch</h4>
            <a href={business.phoneHref}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <span>{business.address}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Web Pro Chicago. All rights reserved.</span>
          <span>Designed &amp; built in Chicago.</span>
        </div>
      </div>
    </footer>
  );
}
