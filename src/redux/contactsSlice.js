import { createSlice} from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { v4 as uuidv4 } from 'uuid';


const contactsSlice = createSlice({
    name: 'contacts',
	initialState,
	reducers: {
		createContacts: (state, { payload }) => {
			state.contacts.push({
				id: uuidv4(),
				title: payload,
				// completed: false,
			})
		},
		updateContacts: (state, { payload }) => {
			state.contacts.map((contacts) =>
				contacts.id === payload.id ? { ...contacts, ...payload } : contacts
			)
		},
		deleteContacts: (state, { payload }) => {
			state.contacts.filter(({ id }) => id !== payload)
		},
	},
})

export const contactsReducer = contactsSlice.reducer
export const { createContacts, deleteContacts, updateContacts } = contactsSlice.actions
