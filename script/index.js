import getContactsList from './getContactsList.js';
import renderContactsList from './renderContactsList.js';

(async () => {
  try {
    const peopleList = await getContactsList();
    const root = document.getElementById('container');
    renderContactsList(root, peopleList);
  } catch {
    console.log('Failed to load people list');
  }
})();