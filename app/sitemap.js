import { siteConfig, blogPosts } from "@/data/site";

export default function sitemap() {
  const staticPages = [
    "",
    "/chiptuning",
    "/find-din-bil",
    "/services",
    "/service-ac-service",
    "/service-synstjek",
    "/service-diagnostik-fejlsoegning",
    "/service-vedligehold-bremser",
    "/service-klargoering-optimering",
    "/service-dpf-rens",
    "/service-turbo-kontrol",
    "/service-motoroptimering",
    "/autovaerksted-roedovre",
    "/autovaerksted-hvidovre",
    "/autovaerksted-herlev",
    "/autovaerksted-soeborg",
    "/autovaerksted-frederiksberg",
    "/autovaerksted-ishoej",
    "/autovaerksted-glostrup",
    "/autovaerksted-ballerup",
    "/diagnostik-roedovre",
    "/motoroptimering-roedovre",
    "/serviceomraader-storkoebenhavn",
    "/om-os",
    "/kontakt",
    "/blog"
  ];

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
