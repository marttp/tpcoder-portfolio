import type { JSX } from "solid-js";
import { For, Show } from "solid-js";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  heroImage?: string;
  tags: string[];
  language: "en" | "th";
}

const languageBadgeStyles = {
  en: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-400",
    darkBg: "dark:bg-background-dark",
    darkText: "dark:text-blue-400",
  },
  th: {
    bg: "bg-green-100",
    text: "text-green-800",
    border: "border-green-400",
    darkBg: "dark:bg-background-dark",
    darkText: "dark:text-green-400",
  },
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogCard = ({ post }: { post: BlogPost }): JSX.Element => {
  const langStyles = languageBadgeStyles[post.language];

  return (
    <div class="h-full flex flex-col p-4 rounded-lg border bg-slate-50 border-slate-200 dark:bg-background-dark dark:border-slate-700">
      {/* Hero Image */}
      <Show when={post.heroImage}>
        <img
          src={post.heroImage}
          alt={post.title}
          class="w-full h-40 object-cover rounded-md mb-3"
        />
      </Show>

      {/* Title */}
      <a
        href={`/blog/${post.slug}/`}
        class="block text-lg font-medium text-black hover:underline dark:text-primary-light mb-1"
      >
        {post.title}
      </a>

      {/* Language Badge */}
      <span
        class={`
          inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded mb-2 border w-fit
          ${langStyles.bg} ${langStyles.text} ${langStyles.border}
          ${langStyles.darkBg} ${langStyles.darkText}
        `}
      >
        {post.language === "en" ? "EN" : "TH"}
      </span>

      {/* Description */}
      <p class="text-sm text-gray-900 dark:text-gray-400 mb-2 flex-grow">
        {post.description}
      </p>

      {/* Tags */}
      <div class="flex flex-wrap gap-1 mb-2">
        <For each={post.tags}>
          {(tag) => (
            <span class="text-xs px-2 py-0.5 rounded font-medium border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-400">
              {tag}
            </span>
          )}
        </For>
      </div>

      {/* Publication Date */}
      <p class="text-xs text-gray-900 dark:text-gray-500">
        {formatDate(post.pubDate)}
      </p>
    </div>
  );
};

export default BlogCard;
