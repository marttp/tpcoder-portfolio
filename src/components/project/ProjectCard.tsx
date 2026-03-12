import type { JSX } from "solid-js";
import { For, Show } from "solid-js";
import type { ProjectItem } from "../../data/props";

const MEDIUM_BASE_URL = "https://medium.com/@tpbabparn/";

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

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const ExternalIcon = () => (
  <svg
    class="inline-block w-4 h-4 ml-1 mb-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const ProjectCard = ({ project }: { project: ProjectItem }): JSX.Element => {
  const langStyles = languageBadgeStyles[project.language];
  const isLocal = !!project.slug;
  const titleHref = isLocal
    ? `/project/${project.slug}/`
    : project.github || (project.mediumSlug ? `${MEDIUM_BASE_URL}${project.mediumSlug}` : "#");

  return (
    <div class="h-full flex flex-col p-4 rounded-lg border bg-slate-50 border-slate-200 dark:bg-background-dark dark:border-slate-700">
      {/* Title */}
      <a
        href={titleHref}
        target={isLocal ? undefined : "_blank"}
        rel={isLocal ? undefined : "noopener noreferrer"}
        class="block text-lg font-medium text-black hover:underline dark:text-primary-light mb-1"
      >
        {project.title}
        <Show when={!isLocal}>
          <ExternalIcon />
        </Show>
      </a>

      {/* Language Badge */}
      <span
        class={`
          inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded mb-2 border w-fit
          ${langStyles.bg} ${langStyles.text} ${langStyles.border}
          ${langStyles.darkBg} ${langStyles.darkText}
        `}
      >
        {project.language === "en" ? "EN" : "TH"}
      </span>

      {/* Description */}
      <p class="text-sm text-gray-900 dark:text-gray-400 mb-2 flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div class="flex flex-wrap gap-1 mb-2">
        <For each={project.tags}>
          {(tag) => (
            <span class="text-xs px-2 py-0.5 rounded font-medium border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-400">
              {tag}
            </span>
          )}
        </For>
      </div>

      {/* Date + External links */}
      <div class="flex items-center justify-between">
        <p class="text-xs text-gray-900 dark:text-gray-500">
          {formatDate(project.pubDate)}
        </p>
        <div class="flex items-center gap-3">
          <Show when={project.github}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
            >
              GitHub
            </a>
          </Show>
          <Show when={project.mediumSlug}>
            <a
              href={`${MEDIUM_BASE_URL}${project.mediumSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
            >
              Medium
            </a>
          </Show>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
