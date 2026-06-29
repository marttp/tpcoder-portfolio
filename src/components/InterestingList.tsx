import type { JSX } from 'solid-js';

const InterestingLink = ({
  url = '',
  index = 0,
}: {
  url: string | undefined;
  index: number;
}): JSX.Element => (
  <>
    <div class="my-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        class="border-b hover:scale-110"
      >
        {`Interesting Link`}
      </a>
    </div>
  </>
);

export default InterestingLink;
