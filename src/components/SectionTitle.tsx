import { JSX } from 'solid-js';

const SectionTitle = ({ title }: { title: string }): JSX.Element => (
  <h1 class="text-4xl font-bold mb-4 flex justify-center">{title}</h1>
);

export default SectionTitle;
