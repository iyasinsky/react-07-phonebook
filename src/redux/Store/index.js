import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from 'redux/ContactsSlice';
import { filterSlice } from 'redux/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
