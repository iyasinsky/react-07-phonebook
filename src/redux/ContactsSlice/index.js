import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const isPendingAction = action => action.type.endsWith('/pending');

const isFulfilledAction = action => action.type.endsWith('/fulfilled');

const isRejectedAction = action => action.type.endsWith('/rejected');

const pendingReducer = state => {
  state.isLoading = true;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactFulfilledReducer = (state, action) => {
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addMatcher(isPendingAction, pendingReducer)
      .addMatcher(isFulfilledAction, fulfilledReducer)
      .addMatcher(isRejectedAction, rejectedReducer),
});
