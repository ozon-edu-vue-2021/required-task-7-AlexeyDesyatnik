import renderContactDetails from "./renderContactDetails.js";

const templateContactsList = document.getElementById('tmpl-contacts-list');
const templateContact = document.getElementById('tmpl-contacts-list-item')

const renderContact = (contact, state) => {
  const contactNode = templateContact.content.cloneNode(true);
  const li = contactNode.querySelector('li');
  li.id = contact.id;
  li.addEventListener('click', () => renderContactDetails(contact, state));
  const nameElement = contactNode.querySelector('li strong');
  nameElement.innerText = contact.name;
  return contactNode;
};

export default (state) => {
  const { container, contacts } = state;
  const contactsList = templateContactsList.content.cloneNode(true);
  const ul = contactsList.querySelector('.contacts-list');
  contacts.forEach(contact => {
    const contactNode = renderContact(contact, state);
    ul.appendChild(contactNode);
  });
  container.innerHTML = '';
  container.appendChild(contactsList);
};