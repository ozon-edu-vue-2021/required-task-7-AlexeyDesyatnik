import getContactsList from './getContactsList.js';
import renderContactsList from './renderContactsList.js';


/*
Programmaticaly add transform styles for list items
*/
const addContactsListStyles = (contactList) => {
  let style = '';
  for (let i = 11; i <= contactList.length; i++ ) {
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
    const contactsList = await getContactsList();
    addContactsListStyles(contactsList);
    const container = document.getElementById('container');
    renderContactsList(container, contactsList);
  } catch {
    console.log('Failed to load contacts list');
  }
})();