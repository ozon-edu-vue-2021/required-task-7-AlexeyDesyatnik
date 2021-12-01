export default (contactsList) => {
  const contactsMap = {};
  contactsList.forEach(contact => {
    contactsMap[contact.id] = contact;
  });
  // Probably will return other preprocessed structures in future
  // so return as an object
  return { contactsMap };
};