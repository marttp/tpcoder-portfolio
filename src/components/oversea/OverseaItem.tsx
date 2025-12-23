import type { Accessor } from 'solid-js';
import type { JSX } from 'solid-js';
import type { Oversea } from '../../data/props';
import InterestingLink from '../InterestingList';

const OverseaItem = ({
  oversea,
}: {
  oversea: Oversea;
  index: Accessor<number>;
}): JSX.Element => (
  <>
    <div class="mb-8 rounded overflow-hidden shadow-lg p-4 md:p-8 dark:shadow-primary-light">
      <h3 class="text-xl font-bold">{oversea.name}</h3>
      <p class="text-gray-700">
        {oversea.country} - {oversea.place}
      </p>
      {/* Handle resources */}
      {oversea.resources &&
        oversea.resources.map((resource, index) => (
          <InterestingLink url={resource.url} index={index} />
        ))}
    </div>
  </>
);

export default OverseaItem;
