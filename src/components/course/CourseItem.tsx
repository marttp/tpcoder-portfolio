// src/components/course/CourseItem.tsx
import type { JSX } from "solid-js";

export interface Course {
  name: string;
  description: string;
  url: string;
  lang: string;
  format: "Text" | "Video" | "Crash Course" | string;
  topic: string;
}

const formatBadgeStyles = {
  Text: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-400",
    // Using your dark mode background
    darkBg: "dark:bg-background-dark",
    darkText: "dark:text-blue-400",
  },
  Video: {
    bg: "bg-green-100",
    text: "text-green-800",
    border: "border-green-400",
    darkBg: "dark:bg-background-dark",
    darkText: "dark:text-green-400",
  },
  "Crash Course": {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    border: "border-yellow-400",
    darkBg: "dark:bg-background-dark",
    darkText: "dark:text-yellow-400",
  },
  Default: { // Fallback style
    bg: "bg-gray-100",
    text: "text-gray-800",
    border: "border-gray-500",
    darkBg: "dark:bg-background-dark", // Use your dark bg for default too
    darkText: "dark:text-gray-400",
  }
};

const CourseItem = ({ course }: { course: Course }): JSX.Element => {
  // Use provided format string, handle potential non-standard formats via || Default
  const styles = formatBadgeStyles[course.format] || formatBadgeStyles.Default;

  return (
    <div class="h-full flex flex-col p-4 rounded-lg border bg-slate-50 border-slate-200 dark:bg-background-dark dark:border-slate-700">
      {/* Title */}
      <a
        href={course.url}
        class="block text-lg font-medium text-black hover:underline dark:text-primary-light mb-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        {course.name}
      </a>

      {/* Format Badge */}
      <span
        class={`
          inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded mb-2 border w-fit
          ${styles.bg} ${styles.text} ${styles.border}
          ${styles.darkBg} ${styles.darkText}
        `}
      >
        {/* Handle potential non-standard formats safely */}
        {course.format in formatBadgeStyles ? course.format : "Info"}
      </span>

      {/* Description */}
      <p class="text-sm text-gray-900 dark:text-gray-400 mb-1 flex-grow">{course.description}</p>

      {/* Language */}
      <p class="text-xs text-gray-900 dark:text-gray-500">{`Language: ${course.lang}`}</p>
    </div>
  );
};

export default CourseItem;