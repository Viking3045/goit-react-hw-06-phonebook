// import React, { useState } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, filterSelectors} from 'redux/selectors';
import { createContactActions, updateContactActions } from 'redux/actions';
// import { nanoid } from 'nanoid';

export const App =()=> {
  // const [contacts, setContacts] = useState( ()=> JSON.parse(window.localStorage.getItem('contacts')) ?? '');
  const { contacts } = useSelector(contactsSelectors)
    const { filter } = useSelector(filterSelectors)
  const dispatch = useDispatch()
  // const [filter, setFilter] = useState('');
  console.log(contacts)


  // useEffect(() => {
  //     window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // });

  

  const formSubmitHandler = (data) => {
//  repeatControl(data)
    dispatch(createContactActions( { id: uuidv4(), name: data.name, number: data.number },))
    
  }
  //  const repeatControl = data => {
  //   let nameArray = [];
  //   nameArray = contacts.map(cur => cur.name);
  //   if (!nameArray.includes(data.name)) {
  //     let arrayCont = [];
  //     arrayCont = [
  //       ...contacts,
  //       { id: uuidv4(), name: data.name, number: data.number },
  //     ];
  //     return setContacts( arrayCont );
  //   } else {
  //     alert(' Контакт вже є у телефонній книзі!!!');
  //   }
  // };

//  const  elementDelete = (arr, idContact) => {
//     let newArr = arr.filter(elem => elem.id !== idContact);
//     return newArr;
//   };

//  const deleteContactFromContactList = idContact => {
//     let newArrAfterDel = elementDelete(contacts, idContact);
//     setContacts(
//        newArrAfterDel
//     );
//   };

  const setFilterToState = filterData => {
   dispatch(updateContactActions(filterData))
    // setFilter(filterData );
  };

 const filterArr = fArr => {
    let newArr = fArr.filter(cur =>
      cur.name.toUpperCase().includes(filter),
    );
    return newArr;
  };

    return (
          <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmitData={formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter setFilterToState={setFilterToState} />
        <ContactList
           contacts={filterArr(contacts)}
          // del={deleteContactFromContactList}
        />
      </div>
       

    );
}
