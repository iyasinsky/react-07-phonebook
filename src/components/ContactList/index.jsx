import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Operations';
import { selectVisibleContacts } from 'redux/Selectors';
import { List } from './index.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(({ id, name, phone }) => {
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
