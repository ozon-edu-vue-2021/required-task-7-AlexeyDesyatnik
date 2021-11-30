export default (contacts) => {
  const contactsMap = {};
  contacts.forEach(contact => {
    contactsMap[contact.id] = contact;
  });
  // Probably will return other preprocessed structures in future
  // so return as an object
  return { contactsMap };
};