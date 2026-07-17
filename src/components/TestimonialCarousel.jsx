import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./TestimonialCarousel.css";

export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  const active = items[index];

  return (
    <div className="testi">
      <div className="testi-stage glass">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="testi-stars">{"★".repeat(5)}</div>
            <p className="testi-quote">“{active.quote}”</p>
            <div className="testi-person">
              <span className="testi-avatar">{active.name[0]}</span>
              <div>
                <strong>{active.name}</strong>
                <span>{active.company}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="testi-dots">
        {items.map((t, i) => (
          <button
            key={t.name}
            className={`testi-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial from ${t.name}`}
          />
        ))}
      </div>
    </div>
  );
}
