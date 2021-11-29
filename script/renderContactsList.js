/* People list rendering */
const templateContactsList = document.getElementById('tmpl-contacts-list');
const templateContact = document.getElementById('tmpl-contact')

const renderContact = (contact) => {
  const contactElement = templateContact.content.cloneNode(true);
  contactElement.id = contact.id;
  const nameElement = contactElement.querySelector('li strong');
  nameElement.innerText = contact.name;
  return contactElement;
};

export default (container, peopleList) => {
  const contactsList = templateContactsList.content.cloneNode(true);
  const ul = contactsList.querySelector('.contacts-list');
  peopleList.forEach(contact => {
    const contactElement = renderContact(contact);
    ul.appendChild(contactElement);
  });
  container.innerHTML = '';
  container.appendChild(contactsList);
};