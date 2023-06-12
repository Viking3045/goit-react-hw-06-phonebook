
// import { counterReducer } from './counter/counterReducer'
import {contactsReducer } from './contactsReducer'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfigContacts = {
	key: 'contacts',
	storage,
}



const persistedReducerContacts = persistReducer(persistConfigContacts, contactsReducer)

export const reducer = {
	contacts: persistedReducerContacts,

}
