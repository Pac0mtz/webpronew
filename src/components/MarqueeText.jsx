import "./MarqueeText.css";

// Oversized outlined text scroller used as a section divider.
export default function MarqueeText({ text, reverse = false }) {
  const chunk = `${text} ✦ `;
  return (
    <div className="mtext" aria-hidden="true">
      <div className={`mtext-track ${reverse ? "reverse" : ""}`}>
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i}>{chunk}</span>
        ))}
      </div>
    </div>
  );
}
