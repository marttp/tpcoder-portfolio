import { Accessor, JSX } from 'solid-js';
import { Speaker } from '../../data/props';
import InterestingLink from '../InterestingList';

const SpeakerItem = ({
  speaker,
}: {
  speaker: Speaker;
  index: Accessor<number>;
}): JSX.Element => (
  <>
    <div class="mb-8 rounded overflow-hidden shadow-lg p-4 md:p-8 dark:shadow-primary-light">
      <h3 class="text-xl font-bold">{speaker.name}</h3>
      <p class="text-gray-700">{speaker.country}</p>
      {/* Handle resources */}
      {speaker.resources &&
        speaker.resources.map((resource, index) => (
          <InterestingLink url={resource.url} index={index} />
        ))}
    </div>
  </>
);

export default SpeakerItem;
