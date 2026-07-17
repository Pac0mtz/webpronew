import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./RotatingWord.css";

export default function RotatingWord({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="rotating-word">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.em
          key={words[index]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[index]}
        </motion.em>
      </AnimatePresence>
    </span>
  );
}
