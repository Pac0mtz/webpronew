import "./MeshBackground.css";

export default function MeshBackground({ variant = "hero" }) {
  return (
    <div className={`mesh mesh-${variant}`} aria-hidden="true">
      <span className="mesh-blob mesh-blob-1" />
      <span className="mesh-blob mesh-blob-2" />
      <span className="mesh-blob mesh-blob-3" />
      <div className="mesh-grid" />
    </div>
  );
}
