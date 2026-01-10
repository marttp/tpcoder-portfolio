import { For } from 'solid-js';
import SectionTitle from '../SectionTitle';
import CommitmentItem from './CommitmentItem';
import { Commitment } from '../../data/props';

const CommitmentList = ({ data }: { data: Commitment[] }) => (
  <section>
    <SectionTitle title="Commitments" />
    <For each={data}>
      {(commitment, index) => <CommitmentItem commitment={commitment} index={index} />}
    </For>
  </section>
);

export default CommitmentList;
