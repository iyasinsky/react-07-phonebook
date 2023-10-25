import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsList } from '../ContactList';
import { Filter } from '../Filter';
import { fetchContacts } from 'redux/Operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? <ContactsList /> : null}
    </div>
  );
};
