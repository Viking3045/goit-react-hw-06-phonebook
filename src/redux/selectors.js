export const contactsSelectors = (state) => state.contacts
// export const filterSelectors = (state) =>  state.filter
// console.log(contactsSelectors)
export const filterSelectors = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
  return result;
};