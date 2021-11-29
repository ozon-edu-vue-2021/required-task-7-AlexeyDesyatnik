import getContactsList from './getContactsList.js';
import renderContactsList from './renderContactsList.js';

(async () => {
  try {
    const peopleList = await getContactsList();
    const container = document.getElementById('container');
    renderContactsList(container, peopleList);
  } catch {
    console.log('Failed to load people list');
  }
})();