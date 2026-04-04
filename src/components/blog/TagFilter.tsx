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

  const baseClass = "px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer border";
  const activeClass = "bg-primary-light text-black border-primary-dark dark:bg-primary-dark dark:text-white dark:border-primary-light";
  const inactiveClass = "bg-transparent border-gray-300 text-gray-700 hover:border-gray-500 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-500";

  return (
    <div class="flex flex-row flex-wrap gap-2 mb-6 md:flex-col md:sticky md:top-4">
      <button
        type="button"
        onClick={() => handleTagClick("all")}
        class={`${baseClass} text-left ${activeTag() === "all" ? activeClass : inactiveClass}`}
      >
        All
      </button>
      <For each={props.tags}>
        {(tag) => (
          <button
            type="button"
            onClick={() => handleTagClick(tag)}
            class={`${baseClass} text-left ${activeTag() === tag ? activeClass : inactiveClass}`}
          >
            {tag}
          </button>
        )}
      </For>
    </div>
  );
};

export default TagFilter;
