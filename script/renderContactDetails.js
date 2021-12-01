import renderContactsList from "./renderContactsList.js";

/* TEMPLATE:
<div class="details-view">
      <div class="back"></div>
      <div class="background"></div>
      <div><ul>
        <li class="people-title">Друзья</li>
        <li><i class="fa fa-male"></i><span >Иван</span></li>
        <li><i class="fa fa-male"></i><span >Максим</span></li>
        <li><i class="fa fa-male"></i><span >Марат</span></li>
        <li class="people-title">Не в друзьях</li>
        <li><i class="fa fa-male"></i><span >Вася</span></li>
        <li><i class="fa fa-male"></i><span >Кирилл</span></li>
        <li><i class="fa fa-male"></i><span >Степан</span></li>
        <li class="people-title">Популярные люди</li>
        <li><i class="fa fa-male"></i><span >Елена</span></li>
        <li><i class="fa fa-male"></i><span >Оля</span></li>
        <li><i class="fa fa-male"></i><span >Никита</span></li>
      </ul></div>
    </div>
  */

const templateContactDetails = document.getElementById('tmpl-contact-details');
const templateFriendsListHeader = document.getElementById('tmpl-friends-list-header');
const templateFriendsListItem = document.getElementById('tmpl-friends-list-item');

const renderFriendListHeader = (text) => {
  const item = templateFriendsListHeader.content.cloneNode(true);
  const li = item.querySelector('li');
  li.innerText = text;
  return item;
};

const renderFriendListItem = (person) => {
  const item = templateFriendsListItem.content.cloneNode(true);
  const nameSpan = item.querySelector('li span');
  nameSpan.innerText = person.name;
  return item;
};

const addFriendListItems = (friendsUl, headerText, contactIds, state) => {
  const { contactsMap } = state;
  const header = renderFriendListHeader(headerText);
  friendsUl.appendChild(header);
  contactIds.forEach((contactId) => {
    const contact = contactsMap[contactId];
    const item = renderFriendListItem(contact);
    friendsUl.appendChild(item);
  });
};

const addFriends = (friendsUl, contact, state) => 
  addFriendListItems(friendsUl, 'Друзья', contact.friends, state);

export default (contact, state) => {
  const { container } = state;
  const details = templateContactDetails.content.cloneNode(true);

  const back = details.querySelector('.back');
  back.addEventListener('click', () => {
    container.classList.remove('details');
    renderContactsList(state);
  });

  const name = details.querySelector('.contact-name');
  name.innerHTML = contact.name;

  const friendsUl = details.querySelector('.friends-and-others ul');
  addFriends(friendsUl, contact, state);

  container.innerHTML = '';
  container.appendChild(details);
  container.classList.add('details');
};