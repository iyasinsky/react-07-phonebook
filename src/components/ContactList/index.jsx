import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { List } from './index.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const normalizedFilterValue = useSelector(state =>
    state.filter.toLowerCase()
  );
  const filteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilterValue)
    );

  return (
    <List>
      {filteredContacts().map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{phone}</span>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        );
      })}
    </List>
  );
};
