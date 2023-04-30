import { JSX } from 'solid-js';

const SectionTitle = ({ title }: { title: string }): JSX.Element => (
  <h1 class="text-2xl md:text-4xl font-bold mb-4 flex justify-center items-center text-center">{title}</h1>
);

export default SectionTitle;
