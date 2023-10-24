import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../ContactsSlice';
import { filterSlice } from '../FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});
