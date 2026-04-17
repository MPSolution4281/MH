import PageIntro from "@/components/PageIntro";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/site";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Læs artikler om chiptuning, motoroptimering, lovlighed i Danmark og hvor meget effekt man kan få. Bloggen er bygget til SEO og intern linking.",
  alternates: {
    canonical: "/blog"
  }
};

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Artikler om chiptuning, motoroptimering og biler i praksis."
        description="Bloggen gør det nemt at udvide sitet med nyt indhold, styrke intern linking og arbejde mere målrettet med dansk SEO og linkbuilding."
      />

      <section className="section">
        <div className="container">
          <div className="preview-grid cards-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="button-row">
            <Link className="button secondary" href="/services">
              Se services
            </Link>
            <Link className="button secondary" href="/find-din-bil">
              Gå til Find din bil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
