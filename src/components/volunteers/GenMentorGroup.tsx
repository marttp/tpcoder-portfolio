import { createSignal, For, Show } from 'solid-js';
import { VolunteerItem as Item } from '../../data/props';
import VolunteerItem from './VolunteerItem';

const GenMentorGroup = ({ items }: { items: Item[] }) => {
  const [isExpanded, setIsExpanded] = createSignal(false);

  return (
    <div class="mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded())}
        class="w-full text-left rounded overflow-hidden border border-gray-300 dark:border-primary-light p-4 md:p-8 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-xl font-bold">GenMentor - Generation Thailand</h3>
            <p class="text-gray-700 dark:text-gray-300 mt-2">
              {items.length} mentoring cohorts
            </p>
          </div>
          <svg
            class={`w-6 h-6 transition-transform ${isExpanded() ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <Show when={isExpanded()}>
        <div class="mt-4 ml-4 md:ml-8">
          <For each={items}>
            {(item, index) => <VolunteerItem item={item} index={index} />}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default GenMentorGroup;
