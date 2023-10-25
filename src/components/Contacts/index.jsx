import { useContacts } from 'hooks';
import { ContactsList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export const Contacts = () => {
  const contacts = useContacts();

  return (
    <div>
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? <ContactsList /> : null}
    </div>
  );
};
