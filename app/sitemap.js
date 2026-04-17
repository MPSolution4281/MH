import { siteConfig, blogPosts } from "@/data/site";

export default function sitemap() {
  const staticPages = ["", "/chiptuning", "/find-din-bil", "/services", "/om-os", "/kontakt", "/blog"];

  const staticEntries = staticPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date()
  }));

  return [...staticEntries, ...blogEntries];
}
