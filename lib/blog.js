import { blogPosts } from "@/data/site";

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
