import type { JSX } from 'solid-js';
import type { Competition } from '../../data/props';
import InterestingLink from '../InterestingList';

type CompetitionProps = {
  competition: Competition;
  index: number;
};

const CompetitionItem = (props: CompetitionProps): JSX.Element => {
  const { competition, index } = props;

  const isImage = competition.resources?.[0]?.type === 'images';
  const isOdd = index % 2 !== 0;

  const Content = (
    <div class={`w-full md:w-3/5 ${isImage ? 'text-center' : ''}`}>
      <h3 class="text-xl font-bold">{competition.name}</h3>
      <p class="text-gray-700">
        {competition.date} - {competition.country}
      </p>
      {competition.detail?.award && (
        <div>
          <p class="text-gray-700">Award: {competition.detail?.award}</p>
          {!isImage && (
            <InterestingLink url={competition.resources?.[0]?.url} index={0}/>
          )}
        </div>
      )}
    </div>
  );

  const ImageDispaly = (
    <>
      <div class="w-full md:w-2/5">
        <img
          src={competition.resources?.[0]?.url}
          alt={competition.name}
          class={`${
            isOdd ? 'ml-4' : 'mr-4'
          } rounded-lg object-cover object-center w-full h-full md:h-60 mb-4 md:mb-0`}
        />
      </div>
      {Content}
    </>
  );

  return (
    <div
      class={`${
        isImage && isOdd ? 'flex-row-reverse' : 'flex-row'
      } flex flex-col md:flex-row items-center mb-8 rounded overflow-hidden shadow-lg p-8 dark:shadow-primary-light`}
    >
      {isImage ? ImageDispaly : Content}
    </div>
  );
};

export default CompetitionItem;
