import type { JSX } from 'solid-js';
import Contact from './Contact';

type Props = {
  contacts: { name: string; url: string; icon: string }[];
};

const ContactList = (props: Props) => {
  return (
    <ul class="list-none grid grid-cols-2 gap-8">
      {props.contacts.map((contact, index) => (
        <Contact
          name={contact.name}
          url={contact.url}
          icon={contact.icon}
        />
      ))}
    </ul>
  );
};

export default ContactList;
