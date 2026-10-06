import { getCollection, type CollectionEntry } from "astro:content";
import { collectionsKeys } from "../content.config";

export type PostCollection = "projects" | "games" | "music";
export type Post = CollectionEntry<PostCollection>;

export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

// Visual metadata for each collection, shared by cards, badges and the hero.
export const collectionMeta: Record<
  PostCollection,
  { label: string; icon: string; color: string; blurb: string }
> = {
  projects: {
    label: "Projects",
    icon: "⌨",
    color: "var(--color-ctp-green)",
    blurb: "AI, data science & software I've built",
  },
  games: {
    label: "Games",
    icon: "◆",
    color: "var(--color-ctp-peach)",
    blurb: "Hobby projects, game jam entries & playable experiments",
  },
  music: {
    label: "Music",
    icon: "♪",
    color: "var(--color-ctp-mauve)",
    blurb: "Soundtracks & compositions",
  },
};

/** Every post across all collections, newest first. */
export async function getAllPosts(collection?: string): Promise<Post[]> {
  const keys = (collection ? [collection] : collectionsKeys) as PostCollection[];
  const entries = await Promise.all(keys.map((key) => getCollection(key)));
  return entries
    .flat()
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export const postUrl = (post: Post) =>
  `${BASE}/posts/${post.collection}/${post.id}/`;

export function readingTime(body = "") {
  const words = body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
