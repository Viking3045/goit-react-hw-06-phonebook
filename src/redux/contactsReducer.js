// import { filterReducer } from "./filterReducer"
// import { contactsReducer } from "./contactsReducer"
import { createReducer } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { createContactActions, deleteContactActions, updateContactActions } from "./actions"

console.log(initialState)
// export const reducer = {
//   contacts: contactsReducer,
//   filter: filterReducer
// }
export const contactsReducer = createReducer(initialState, {
  [createContactActions]: (state, { payload }) => {
    state.contacts.push(payload)
  },
  [deleteContactActions]: (state, { payload }) => {
    state.contacts.map((data)=>data.id ===payload.id ?  {...data, ...payload} : data) 
    },
  [updateContactActions]: (state, { payload }) => {
    state.contacts.filter(({id})=>id !==payload)
  }
})