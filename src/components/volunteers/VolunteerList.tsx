import { For } from 'solid-js';
import SectionTitle from '../SectionTitle';
import VolunteerItem from './VolunteerItem';
import { VolunteerItem as Item } from '../../data/props';

const VolunteerList = ({ data }: { data: Item[] }) => (
  <section>
    <SectionTitle title="Volunteers" />
    <For each={data}>
      {(volunteer, index) => <VolunteerItem item={volunteer} index={index} />}
    </For>
  </section>
);

export default VolunteerList;
