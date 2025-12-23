import { createSignal, Show, For, type Component } from 'solid-js';
import type { Competition, VolunteerItem, Oversea, Speaker } from '../../data/props';
import InterestingLink from '../InterestingList';
import SectionTitle from '../SectionTitle';

interface Props {
  competitions: Competition[];
  volunteers: VolunteerItem[];
  overseas: Oversea[];
  speakers: Speaker[];
}

const ActivitiesEnhanced: Component<Props> = (props) => {
  const { competitions, volunteers, overseas, speakers } = props;

  // Group GenMentor activities
  const genMentorItems = volunteers.filter(v => v.title.includes('GenMentor#'));
  const otherVolunteers = volunteers.filter(v => !v.title.includes('GenMentor#'));

  const [isGenMentorExpanded, setIsGenMentorExpanded] = createSignal(false);

  // Calculate stats
  const totalActivities = competitions.length + volunteers.length + overseas.length + speakers.length;
  const awards = competitions.filter(c => c.detail?.award && c.detail.award !== '-').length;
  const countries = new Set([
    ...competitions.map(c => c.country),
    ...overseas.map(o => o.country),
    ...speakers.map(s => s.country)
  ]).size;

  const years = new Set([
    ...competitions.map(c => c.date.split('-')[0]),
    ...volunteers.map(v => v.fromDate.split('-')[0])
  ]);
  const yearRange = `${Math.min(...Array.from(years).map(Number))}-${Math.max(...Array.from(years).map(Number))}`;

  const genMentorDateRange = genMentorItems.length > 0
    ? `${genMentorItems[genMentorItems.length - 1].fromDate} - ${genMentorItems[0].toDate}`
    : '';

  return (
    <div>
      {/* Statistics Dashboard */}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate__animated animate__fadeInUp">
        <div class="bg-primary-light dark:bg-primary-dark rounded-lg p-4 md:p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
          <div class="text-3xl md:text-4xl mb-2">📊</div>
          <div class="text-2xl md:text-3xl font-bold text-white">{totalActivities}</div>
          <div class="text-sm md:text-base text-white opacity-90">Total Activities</div>
        </div>
        <div class="bg-primary-light dark:bg-primary-dark rounded-lg p-4 md:p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
          <div class="text-3xl md:text-4xl mb-2">🏆</div>
          <div class="text-2xl md:text-3xl font-bold text-white">{awards}</div>
          <div class="text-sm md:text-base text-white opacity-90">Awards Won</div>
        </div>
        <div class="bg-primary-light dark:bg-primary-dark rounded-lg p-4 md:p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
          <div class="text-3xl md:text-4xl mb-2">🌏</div>
          <div class="text-2xl md:text-3xl font-bold text-white">{countries}</div>
          <div class="text-sm md:text-base text-white opacity-90">Countries</div>
        </div>
        <div class="bg-primary-light dark:bg-primary-dark rounded-lg p-4 md:p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
          <div class="text-3xl md:text-4xl mb-2">📅</div>
          <div class="text-2xl md:text-3xl font-bold text-white">{yearRange}</div>
          <div class="text-sm md:text-base text-white opacity-90">Active Years</div>
        </div>
      </div>

      {/* Competitions */}
      <section id="competitions" class="scroll-mt-24 mb-12">
        <SectionTitle title="Competitions" />
        <For each={competitions}>
          {(competition, index) => {
            const hasImage = competition.resources?.[0]?.type === 'images';
            const isOdd = index() % 2 !== 0;

            return (
              <div class={`mb-8 rounded overflow-hidden shadow-lg p-8 dark:shadow-primary-light hover:shadow-xl transition-shadow ${
                hasImage ? 'flex flex-col md:flex-row items-center gap-6' : ''
              } ${hasImage && isOdd ? 'md:flex-row-reverse' : ''}`}>
                <Show when={hasImage}>
                  <div class="w-full md:w-2/5 flex-shrink-0">
                    <img
                      src={competition.resources![0].url}
                      alt={competition.name}
                      class="rounded-lg object-cover object-center w-full h-auto md:h-60"
                    />
                  </div>
                </Show>
                <div class={hasImage ? 'w-full md:w-3/5' : 'w-full'}>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <Show when={competition.type === 'hackathon'}>
                      <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white bg-blue-600">
                        <span>💻</span><span>Hackathon</span>
                      </span>
                    </Show>
                    <Show when={competition.type === 'contest'}>
                      <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white bg-red-500">
                        <span>🎯</span><span>Contest</span>
                      </span>
                    </Show>
                    <Show when={competition.detail?.award && competition.detail.award !== '-'}>
                      <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white bg-yellow-500">
                        <span>🏆</span><span>Award</span>
                      </span>
                    </Show>
                    <Show when={competition.detail?.type === 'team'}>
                      <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white bg-green-500">
                        <span>👥</span><span>Team</span>
                      </span>
                    </Show>
                    <Show when={competition.country && !competition.country.includes('Thailand')}>
                      <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white bg-blue-500">
                        <span>🌏</span><span>International</span>
                      </span>
                    </Show>
                  </div>
                  <h3 class="text-xl font-bold mb-2">{competition.name}</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    {competition.date} - {competition.country}
                  </p>
                  <Show when={competition.detail?.award}>
                    <p class="text-gray-700 dark:text-gray-300">Award: {competition.detail?.award}</p>
                  </Show>
                  <Show when={competition.resources && competition.resources[0] && competition.resources[0].type !== 'images'}>
                    <InterestingLink url={competition.resources![0].url} index={0} />
                  </Show>
                </div>
              </div>
            );
          }}
        </For>
      </section>

      <div class="border-b-2 border-gray-400 dark:border-gray-600 my-8"></div>

      {/* Overseas */}
      <section id="overseas" class="scroll-mt-24 mb-12">
        <SectionTitle title="Overseas" />
        <For each={overseas}>
          {(oversea, index) => {
            const hasImage = oversea.resources?.[0]?.type === 'images';
            const isOdd = index() % 2 !== 0;

            return (
              <div class={`mb-8 rounded overflow-hidden shadow-lg p-8 dark:shadow-primary-light hover:shadow-xl transition-shadow ${
                hasImage ? 'flex flex-col md:flex-row items-center gap-6' : ''
              } ${hasImage && isOdd ? 'md:flex-row-reverse' : ''}`}>
                <Show when={hasImage}>
                  <div class="w-full md:w-2/5 flex-shrink-0">
                    <img
                      src={oversea.resources![0].url}
                      alt={oversea.name}
                      class="rounded-lg object-cover object-center w-full h-auto md:h-60"
                    />
                  </div>
                </Show>
                <div class={hasImage ? 'w-full md:w-3/5' : 'w-full'}>
                  <h3 class="text-xl font-bold mb-2">{oversea.name}</h3>
                  <p class="text-gray-700 dark:text-gray-300">{oversea.country}</p>
                  <p class="text-gray-700 dark:text-gray-300">{oversea.place}</p>
                  <Show when={oversea.resources && oversea.resources[0] && oversea.resources[0].type !== 'images'}>
                    <div class="mt-2">
                      <For each={oversea.resources}>
                        {(resource, idx) => (
                          <InterestingLink url={resource.url} index={idx()} />
                        )}
                      </For>
                    </div>
                  </Show>
                </div>
              </div>
            );
          }}
        </For>
      </section>

      <div class="border-b-2 border-gray-400 dark:border-gray-600 my-8"></div>

      {/* Speakers */}
      <section id="speakers" class="scroll-mt-24 mb-12">
        <SectionTitle title="Speakers" />
        <For each={speakers}>
          {(speaker) => (
            <div class="mb-8 rounded overflow-hidden shadow-lg p-8 dark:shadow-primary-light hover:shadow-xl transition-shadow">
              <h3 class="text-xl font-bold mb-2">{speaker.name}</h3>
              <p class="text-gray-700 dark:text-gray-300">{speaker.country}</p>
              <Show when={speaker.resources}>
                <div class="mt-2">
                  <For each={speaker.resources}>
                    {(resource, idx) => (
                      <InterestingLink url={resource.url} index={idx()} />
                    )}
                  </For>
                </div>
              </Show>
            </div>
          )}
        </For>
      </section>

      <div class="border-b-2 border-gray-400 dark:border-gray-600 my-8"></div>

      {/* Volunteers with GenMentor Grouping */}
      <section id="volunteers" class="scroll-mt-24">
        <SectionTitle title="Volunteers" />

        {/* GenMentor Grouped Card */}
        <Show when={genMentorItems.length > 0}>
          <div class="mb-8 rounded overflow-hidden shadow-lg p-4 md:p-8 dark:shadow-primary-light border-2 border-primary-light dark:border-primary hover:shadow-xl transition-shadow">
            <div class="flex justify-between items-start mb-4 flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 class="text-xl md:text-2xl font-bold">Generation Thailand - GenMentor Program</h3>
                  <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white bg-primary">
                    <span>🤝</span><span>Mentoring</span>
                  </span>
                </div>
                <p class="text-gray-700 dark:text-gray-300">
                  {genMentorDateRange} • {genMentorItems.length} cohorts
                </p>
                <p class="text-gray-700 dark:text-gray-300 mt-2">
                  Mentoring software engineering career switchers across multiple cohorts, providing technical guidance and career consulting.
                </p>
              </div>
              <button
                onClick={() => setIsGenMentorExpanded(!isGenMentorExpanded())}
                class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap"
              >
                {isGenMentorExpanded() ? '▲ Hide' : '▼ Show'} Details
              </button>
            </div>

            <Show when={isGenMentorExpanded()}>
              <div class="mt-6 space-y-4 border-t-2 border-gray-300 dark:border-gray-600 pt-4">
                <For each={genMentorItems}>
                  {(item) => (
                    <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 class="font-bold text-lg">{item.title}</h4>
                      <p class="text-gray-700 dark:text-gray-300 text-sm">
                        {item.fromDate} - {item.toDate}
                      </p>
                      <p class="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
                      <Show when={item.resources}>
                        <div class="mt-2">
                          <For each={item.resources}>
                            {(resource, index) => (
                              <InterestingLink url={resource.url} index={index()} />
                            )}
                          </For>
                        </div>
                      </Show>
                    </div>
                  )}
                </For>
              </div>
            </Show>
          </div>
        </Show>

        {/* Other Volunteers */}
        <For each={otherVolunteers}>
          {(item) => (
            <div class="mb-8 rounded overflow-hidden shadow-lg p-4 md:p-8 dark:shadow-primary-light hover:shadow-xl transition-shadow">
              <div class="flex items-center gap-2 mb-2">
                <h3 class="text-xl font-bold">{item.title}</h3>
                <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white bg-primary">
                  <span>🤝</span><span>Mentoring</span>
                </span>
              </div>
              <p class="text-gray-700 dark:text-gray-300">
                {item.fromDate} - {item.toDate}
              </p>
              <p class="text-gray-700 dark:text-gray-300">{item.organization}</p>
              <p class="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
              <Show when={item.resources}>
                <div class="mt-2">
                  <For each={item.resources}>
                    {(resource, index) => (
                      <InterestingLink url={resource.url} index={index()} />
                    )}
                  </For>
                </div>
              </Show>
            </div>
          )}
        </For>
      </section>
    </div>
  );
};

export default ActivitiesEnhanced;
