import { createMemo } from 'solid-js';
import { SOCIAL_LIST } from '../data/social';
import SocialIcon from './SocialIcon';

const Footer = () => {
  const today = createMemo(() => new Date());

  return (
    <footer class="p-6 text-center">
      &copy; {today().getFullYear()} TP Coder. All rights reserved.
      <div class="flex justify-center">
        {SOCIAL_LIST.map((social) => (<SocialIcon {...social} />))}
      </div>
    </footer>
  );
};

export default Footer;
