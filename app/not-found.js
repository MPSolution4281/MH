import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container content-stack">
        <p className="eyebrow">404</p>
        <h1>Siden blev ikke fundet.</h1>
        <p className="lead">
          Gå tilbage til forsiden, læs om chiptuning eller brug navigationen til at finde den rigtige
          underside.
        </p>
        <div className="button-row">
          <Link className="button" href="/">
            Gå til forsiden
          </Link>
          <Link className="button secondary" href="/chiptuning">
            Læs om chiptuning
          </Link>
        </div>
      </div>
    </section>
  );
}
