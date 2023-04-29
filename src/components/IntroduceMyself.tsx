import { Component } from 'solid-js';

type Props = {
  name: string;
  nickname: string;
  statement: string;
};

const IntroduceMyself: Component<Props> = ({ name, nickname, statement }) => {
  return (
    <section id="introduce-myself" class="flex justify-center">
      <div class="flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/34801905?v=4"
          class="rounded-lg w-1/2 md:w-1/4 mb-4"
          alt={name}
        />
        <h2 class="text-xl font-bold mb-2">{name}</h2>
        <p class="text-sm mb-2">
          Also known as {' '}
          <span class="font-semibold text-indigo-600">{nickname}</span>
        </p>
        <article class="mb-4 text-justify">{statement}</article>
      </div>
    </section>
  );
};

export default IntroduceMyself;
