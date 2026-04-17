import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="card">
      <p className="eyebrow" style={{ marginBottom: 12 }}>
        {post.category}
      </p>
      <h3>{post.title}</h3>
      <p className="section-copy" style={{ marginTop: 12 }}>
        {post.excerpt}
      </p>
      <p style={{ marginTop: 18 }}>
        <Link className="text-link" href={`/blog/${post.slug}`}>
          Læs artikel
        </Link>
      </p>
    </article>
  );
}
