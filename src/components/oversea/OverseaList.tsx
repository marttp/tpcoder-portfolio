import { For } from 'solid-js';
import SectionTitle from '../SectionTitle';
import OverseaItem from './OverseaItem';

const OverseaList = ({ data }) => (
  <section>
    <SectionTitle title="Overseas" />
    <For each={data}>
      {(oversea, index) => <OverseaItem oversea={oversea} index={index} />}
    </For>
  </section>
);

export default OverseaList;
