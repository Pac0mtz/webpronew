import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function Counter({ value, suffix = "", duration = 1.6, className }) {
  const ref = useRef(null);
  const displayRef = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (displayRef.current) {
          displayRef.current.textContent = Math.round(latest).toString();
        }
      },
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      <span ref={displayRef}>0</span>
      {suffix}
    </span>
  );
}
