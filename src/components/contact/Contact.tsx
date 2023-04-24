import { JSX } from 'solid-js';

type Props = {
  name: string;
  url: string;
  icon: string;
};

const Contact = (props: Props) => {
  return (
    <li class="flex items-center my-2 hover:opacity-75">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div class="inline-block relative rounded-full h-8 w-8 dark:bg-primary-light mr-2">
          <div class="absolute inset-0 rounded-full" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div innerHTML={props.icon} class="h-5 w-5" />
          </div>
        </div>
      </a>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-lg mx-2"
      >
        {props.name}
      </a>
    </li>
  );
};

export default Contact;
