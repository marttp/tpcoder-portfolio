import { JSX } from 'solid-js';
import { Social } from '../constants/social';

const SocialIcons = (props: Social) => {
  return (
    <a href={props.url} aria-label={props.name}>
      <div class="inline-block relative rounded-full h-8 w-8 dark:bg-primary-light m-3 hover:animate-bounce">
        <div class="absolute inset-0 rounded-full" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div innerHTML={props.icon} class="h-5 w-5" />
        </div>
      </div>
    </a>
  );
};

export default SocialIcons;
