import type { Accessor } from 'solid-js';
import type { JSX } from 'solid-js';
import type { Volunteer, VolunteerItem as Item } from '../../data/props';
import InterestingLink from '../InterestingList';

const VolunteerItem = ({
  item,
}: {
  item: Item;
  index: Accessor<number>;
}): JSX.Element => (
  <>
    <div class="mb-8 rounded overflow-hidden shadow-lg p-4 md:p-8 dark:shadow-primary-light">
      <h3 class="text-xl font-bold">{item.title}</h3>
      <p class="text-gray-700">
        {item.fromDate} - {item.toDate}
      </p>
      <p class="text-gray-700">{item.organization}</p>

      {/* Handle resources */}
      {item.resources &&
        item.resources.map((resource, index) => (
          <InterestingLink url={resource.url} index={index} />
        ))}
    </div>
  </>
);

export default VolunteerItem;
