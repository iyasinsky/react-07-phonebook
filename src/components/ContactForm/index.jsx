import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { addContact } from 'redux/Operations';
import { useSelector } from 'react-redux';
import { FormikForm } from './index.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().phone().required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const contactHandler = newContact => {
    const normalizedName = newContact.name.toLowerCase();
    const isContactExist = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    if (isContactExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    // dispatch(addContact({ id: nanoid(4), ...newContact }));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          contactHandler(values);
          actions.resetForm();
        }}
      >
        <FormikForm>
          <label>
            <div>
              <span>Name</span>
              <Field name="name" placeholder="Enter name" />
            </div>
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            <div>
              <span>Phone</span>
              <Field name="phone" placeholder="Enter UA phone number" />
            </div>
            <ErrorMessage name="phone" component="p" />
          </label>
          <button type="submit">Add new contact</button>
        </FormikForm>
      </Formik>
    </div>
  );
};
