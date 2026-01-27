import { createSignal, onMount, For } from "solid-js";
import type { JSX } from "solid-js";

interface TagFilterProps {
  tags: string[];
}

const TagFilter = (props: TagFilterProps): JSX.Element => {
  const [activeTag, setActiveTag] = createSignal<string>("all");

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    if (typeof window !== "undefined" && window.handleTagFilter) {
      window.handleTagFilter(tag);
    }
  };

  onMount(() => {
    // Listen for external tag changes
    window.addEventListener("tagChanged", ((event: CustomEvent<string>) => {
      setActiveTag(event.detail);
    }) as EventListener);
  });

  return (
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        type="button"
        onClick={() => handleTagClick("all")}
        class={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
          activeTag() === "all"
            ? "bg-primary-light text-black dark:text-white dark:bg-primary-dark border-b-2 border-primary-dark dark:border-primary-light"
            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        All
      </button>
      <For each={props.tags}>
        {(tag) => (
          <button
            type="button"
            onClick={() => handleTagClick(tag)}
            class={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
              activeTag() === tag
                ? "bg-primary-light text-black dark:text-white dark:bg-primary-dark border-b-2 border-primary-dark dark:border-primary-light"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        )}
      </For>
    </div>
  );
};

export default TagFilter;
