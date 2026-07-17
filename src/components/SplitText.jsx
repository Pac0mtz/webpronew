import { motion } from "framer-motion";

const wordVariant = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

// Word-by-word mask reveal for plain-string headings.
// The viewport observer watches the heading itself (the words are clipped
// by their masks, so observing them directly would never fire).
export default function SplitText({ children, as: Tag = "h2", className, delay = 0, ...rest }) {
  const words = String(children).split(" ");
  const MotionTag = motion[Tag] ?? motion.h2;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
      {...rest}
    >
      {words.map((word, i) => (
        <span className="split-mask" key={`${word}-${i}`}>
          <motion.span className="split-word" variants={wordVariant}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
