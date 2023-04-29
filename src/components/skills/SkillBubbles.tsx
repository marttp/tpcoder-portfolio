import { For } from 'solid-js';

interface SkillBubblesProps {
  label: string;
  skills: string[];
}

const SkillBubbles = (props: SkillBubblesProps) => (
  <div class="my-10">
    <h3 class="text-lg font-bold mb-2">{props.label}</h3>
    <div class="flex flex-wrap gap-2">
      <For each={props.skills}>
        {(skill) => (
          <span class="bg-primary-light text-text py-2 px-4 rounded-full text-sm hover:animate-pulse text-center">
            {skill}
          </span>
        )}
      </For>
    </div>
  </div>
);

export default SkillBubbles;
