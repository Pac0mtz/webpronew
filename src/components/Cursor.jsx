import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const onMove = (e) => {
      const { clientX, clientY } = e;
      if (dotRef.current) dotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const onOver = (e) => {
      const interactive = e.target.closest("a, button, [data-cursor-hover]");
      ringRef.current?.classList.toggle("is-hover", Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
