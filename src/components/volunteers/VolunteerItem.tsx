import { Accessor, JSX } from 'solid-js';
import { Volunteer, VolunteerItem as Item } from '../../data/props';
import InterestingLink from '../InterestingList';

const VolunteerItem = ({
  item,
}: {
  item: Item;
  index: Accessor<number>;
}): JSX.Element => (
  <>
    <div class="mb-8 rounded overflow-hidden border border-gray-300 dark:border-primary-light p-4 md:p-8">
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
