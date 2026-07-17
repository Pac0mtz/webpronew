import { useEffect } from "react";

// Injects one or more JSON-LD structured-data blocks for the current page
// and removes them on unmount so schemas never leak across routes.
export default function useJsonLd(schemas) {
  useEffect(() => {
    if (!schemas) return undefined;
    const list = Array.isArray(schemas) ? schemas : [schemas];
    const nodes = list.map((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-route-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });
    return () => nodes.forEach((n) => n.remove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(schemas)]);
}
