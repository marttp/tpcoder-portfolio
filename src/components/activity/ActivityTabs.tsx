import { createSignal, Show } from 'solid-js';
import CompetitionsList from '../competition/CompetitionsList';
import OverseaList from '../oversea/OverseaList';
import SpeakerList from '../speakers/SpeakerList';
import VolunteerList from '../volunteers/VolunteerList';
import { Competition, Oversea, Speaker, VolunteerItem } from '../../data/props';

type ActivitySection = 'competitions' | 'overseas' | 'speakers' | 'volunteers';

interface ActivityTabsProps {
  competitions: Competition[];
  overseas: Oversea[];
  speakers: Speaker[];
  volunteers: VolunteerItem[];
}

const ActivityTabs = (props: ActivityTabsProps) => {
  const [activeTab, setActiveTab] = createSignal<ActivitySection>('competitions');

  const tabs = [
    { id: 'competitions' as ActivitySection, label: 'Competitions', count: props.competitions.length },
    { id: 'overseas' as ActivitySection, label: 'Overseas', count: props.overseas.length },
    { id: 'speakers' as ActivitySection, label: 'Speakers', count: props.speakers.length },
    { id: 'volunteers' as ActivitySection, label: 'Volunteers', count: props.volunteers.length },
  ];

  return (
    <div class="w-full">
      {/* Tab Navigation */}
      <div class="flex flex-wrap gap-2 mb-8 border-b-2 border-gray-300 dark:border-gray-600 pb-4">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            class={`px-6 py-3 rounded-t-lg font-semibold transition-all ${
              activeTab() === tab.id
                ? 'bg-primary-light text-black dark:text-white dark:bg-primary-dark border-b-4 border-primary-dark dark:border-primary-light'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tab.label}
            <span class="ml-2 text-sm opacity-75">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div class="transition-all duration-300">
        <Show when={activeTab() === 'competitions'}>
          <CompetitionsList competitions={props.competitions} />
        </Show>
        <Show when={activeTab() === 'overseas'}>
          <OverseaList data={props.overseas} />
        </Show>
        <Show when={activeTab() === 'speakers'}>
          <SpeakerList data={props.speakers} />
        </Show>
        <Show when={activeTab() === 'volunteers'}>
          <VolunteerList data={props.volunteers} />
        </Show>
      </div>
    </div>
  );
};

export default ActivityTabs;
