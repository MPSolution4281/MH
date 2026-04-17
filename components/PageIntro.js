export default function PageIntro({ eyebrow, title, description, compact = false }) {
  return (
    <section className={`page-hero${compact ? " compact" : ""}`}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
