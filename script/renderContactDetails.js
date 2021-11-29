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

export default (contact, state) => {
  const { container, contacts } = state;
  const details = templateContactDetails.content.cloneNode(true);
  container.innerHTML = '';
  container.appendChild(details);
  console.log(contact);
};