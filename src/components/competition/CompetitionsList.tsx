import { JSX } from 'solid-js';
import CompetitionItem from './CompetitionItem';
import {
  Competition,
} from '../../data/props';

type CompetitionsProps = {
  competitions: Competition[];
}

const CompetitionsList = (props: CompetitionsProps): JSX.Element => {
  const { competitions } = props;

  return (
    <section>
      <h2 class="text-3xl font-bold mb-4 flex justify-center">Competitions</h2>
      {competitions.map((competition, index) => (
        <CompetitionItem competition={competition} index={index} />
      ))}
    </section>
  );
};

export default CompetitionsList;