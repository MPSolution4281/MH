import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="card">
      <h3>{service.title}</h3>
      <p className="section-copy">{service.description}</p>
      {service.link ? (
        <p style={{ marginTop: 18 }}>
          <Link className="text-link" href={service.link.href}>
            {service.link.label}
          </Link>
        </p>
      ) : null}
    </article>
  );
}
