import { Accessor, JSX } from 'solid-js';
import { Commitment } from '../../data/props';

const CommitmentItem = ({
  commitment,
}: {
  commitment: Commitment;
  index: Accessor<number>;
}): JSX.Element => (
  <>
    <div class="mb-8 rounded overflow-hidden border border-gray-300 dark:border-primary-light p-4 md:p-8">
      {/* Status Badge */}
      <div class="flex items-center gap-3 mb-3">
        <span class={`px-3 py-1 rounded-full text-sm font-semibold ${
          commitment.status === 'active'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
        }`}>
          {commitment.status.toUpperCase()}
        </span>
        <span class="text-sm text-gray-600 dark:text-gray-400">
          Since {commitment.startDate}
        </span>
      </div>

      <h3 class="text-xl font-bold mb-3">{commitment.name}</h3>

      <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {commitment.description}
      </p>

      {/* Impact Section */}
      <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
        <h4 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Impact & Mission</h4>
        <p class="text-blue-800 dark:text-blue-300 text-sm leading-relaxed">
          {commitment.impact}
        </p>
      </div>

      {/* Resources */}
      <div class="flex flex-wrap gap-3 mt-4">
        {commitment.resources &&
          commitment.resources.map((resource, resourceIndex) => (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 bg-primary-light dark:bg-primary-dark text-black dark:text-white rounded-lg hover:opacity-80 transition-opacity font-medium"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {resourceIndex === 0 ? 'Learn More (Hands-On)' : 'Visit Hub'}
            </a>
          ))}
      </div>
    </div>
  </>
);

export default CommitmentItem;
