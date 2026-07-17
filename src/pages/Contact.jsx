import { useState } from "react";
import useSEO from "../hooks/useSEO";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { business } from "../data/site";
import "./Contact.css";

const SERVICES = ["Web Design", "Web Development", "App Design", "SEO Optimization", "Google Ads", "Website Maintenance"];

export default function Contact() {
  useSEO({
    title: "Contact — Get Your Free Quote Today",
    description: "Drop us a line. We respond to every message. Call (773) 302-1100 or email info@webprochicago.com.",
    path: "/contact",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero eyebrow="Let's Talk" title="Get Your Free Quote" subtitle="Drop us a line. We respond to every message." />

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal variant="left" className="glass contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success-icon">✓</span>
                <h3>Message sent</h3>
                <p>Thanks for reaching out — we'll get back to you within one business day.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    First Name
                    <input type="text" name="firstName" required />
                  </label>
                  <label>
                    Last Name
                    <input type="text" name="lastName" required />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Email Address
                    <input type="email" name="email" required />
                  </label>
                  <label>
                    Phone Number (Optional)
                    <input type="tel" name="phone" />
                  </label>
                </div>
                <label>
                  Website URL (if you have one)
                  <input type="text" name="website" />
                </label>
                <label>
                  Service Needed
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" rows={5} required />
                </label>
                <button type="submit" className="btn btn-primary" data-cursor-hover>
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          <Reveal variant="right" delay={0.1} className="contact-info">
            <div className="glass contact-info-card">
              <span className="contact-info-label">Call Us</span>
              <a href={business.phoneHref} className="contact-info-value">
                {business.phone}
              </a>
            </div>
            <div className="glass contact-info-card">
              <span className="contact-info-label">Email Us</span>
              <a href={`mailto:${business.email}`} className="contact-info-value">
                {business.email}
              </a>
            </div>
            <div className="glass contact-info-card">
              <span className="contact-info-label">Visit Us</span>
              <span className="contact-info-value">{business.address}</span>
            </div>
            <div className="glass contact-info-card contact-info-hours">
              <span className="contact-info-label">Hours</span>
              <span className="contact-info-value">Mon–Fri · 9am–6pm CT</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
