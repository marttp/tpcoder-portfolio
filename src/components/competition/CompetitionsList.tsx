import { JSX } from 'solid-js';
import CompetitionItem from './CompetitionItem';
import {
  Competition,
} from '../../data/props';
import SectionTitle from '../SectionTitle';

type CompetitionsProps = {
  competitions: Competition[];
}

const CompetitionsList = (props: CompetitionsProps): JSX.Element => {
  const { competitions } = props;

  return (
    <section>
      <SectionTitle title="Competitions" />
      {competitions.map((competition, index) => (
        <CompetitionItem competition={competition} index={index} />
      ))}
    </section>
  );
};

export default CompetitionsList;