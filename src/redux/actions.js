import { createAction,  } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

export const createContactActions = createAction('contacts/create', data=>{
    return {
        payload: {
        id: uuidv4(),
            name: data.name,
            number: data.number
        },
    }
})
export const deleteContactActions = createAction('contacts/delete')
export const updateContactActions = createAction('contacts/update')