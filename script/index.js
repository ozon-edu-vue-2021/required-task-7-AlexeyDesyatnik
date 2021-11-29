import getContacts from './getContacts.js';
import renderContactsList from './renderContactsList.js';


/*
Programmaticaly add transform styles for list items
*/
const addContactsListStyles = (contacts) => {
  let style = '';
  for (let i = 11; i <= contacts.length; i++ ) {
    const offset = (i - 1) * 70;
    style += `
#container .list-view ul li:nth-child(${i}) {
  -webkit-transform: translate3d(0, ${offset}px, 0);
          transform: translate3d(0, ${offset}px, 0);
}`;
  }
  const styleEl = document.createElement('style');
  styleEl.innerHTML = style;
  document.body.appendChild(styleEl);
};

(async () => {
  try {
    const contacts = await getContacts();    
    addContactsListStyles(contacts);    
    const container = document.getElementById('container');
    const state = { container, contacts };
    renderContactsList(state);
  } catch {
    console.log('Failed to load contacts list');
  }
})();