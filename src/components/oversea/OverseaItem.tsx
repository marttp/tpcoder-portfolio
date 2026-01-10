import { Accessor, JSX } from 'solid-js';
import { Oversea } from '../../data/props';
import InterestingLink from '../InterestingList';

const OverseaItem = ({
  oversea,
}: {
  oversea: Oversea;
  index: Accessor<number>;
}): JSX.Element => (
  <>
    <div class="mb-8 rounded overflow-hidden border border-gray-300 dark:border-primary-light p-4 md:p-8">
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
