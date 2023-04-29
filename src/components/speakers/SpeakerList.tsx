import { For } from 'solid-js';
import SectionTitle from '../SectionTitle';
import SpeakerItem from './SpeakerItem';

const SpeakerList = ({ data }) => (
  <section>
    <SectionTitle title="Speakers" />
    <For each={data}>
      {(speak, index) => <SpeakerItem speaker={speak} index={index} />}
    </For>
  </section>
);

export default SpeakerList;
