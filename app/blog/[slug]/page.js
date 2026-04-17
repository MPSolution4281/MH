import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/PageIntro";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageIntro eyebrow={post.category} title={post.title} description={post.excerpt} compact />

      <section className="section">
        <div className="container split-grid">
          <article className="content-stack">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <aside className="content-stack">
            <div className="card">
              <h3>Relaterede sider</h3>
              <ul className="bullet-list" style={{ marginTop: 14 }}>
                <li>
                  <Link className="text-link" href="/services">
                    Se vores services
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="/find-din-bil">
                    Find din bil
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="/kontakt">
                    Kontakt os
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
