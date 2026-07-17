import { useEffect } from "react";

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function useSEO({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Web Pro Chicago` : "Web Pro Chicago";
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `https://webprochicago.com${path}`, "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://webprochicago.com${path}`);

    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [title, description, path]);
}
