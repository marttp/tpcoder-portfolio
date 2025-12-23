import { For, createMemo } from 'solid-js';
import SectionTitle from '../SectionTitle';
import VolunteerItem from './VolunteerItem';
import GenMentorGroup from './GenMentorGroup';
import { VolunteerItem as Item } from '../../data/props';

const VolunteerList = ({ data }: { data: Item[] }) => {
  const groupedData = createMemo(() => {
    const genMentorItems: Item[] = [];
    const otherItems: Item[] = [];

    data.forEach((item) => {
      if (item.title.includes('GenMentor')) {
        genMentorItems.push(item);
      } else {
        otherItems.push(item);
      }
    });

    return { genMentorItems, otherItems };
  });

  return (
    <section>
      <SectionTitle title="Volunteers" />
      {groupedData().genMentorItems.length > 0 && (
        <GenMentorGroup items={groupedData().genMentorItems} />
      )}
      <For each={groupedData().otherItems}>
        {(volunteer, index) => <VolunteerItem item={volunteer} index={index} />}
      </For>
    </section>
  );
};

export default VolunteerList;
