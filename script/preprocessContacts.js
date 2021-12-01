export default (contactsList) => {
  const contactsMap = {};
  const contactsBefriendedCount = {};
  contactsList.forEach(contact => {
    contactsMap[contact.id] = contact;
    contact.friends.forEach(friendId => {
      if (!contactsBefriendedCount.hasOwnProperty(friendId)) {
        contactsBefriendedCount[friendId] = 0;
      }
      contactsBefriendedCount[friendId] += 1;
    });
  });

  const mostPopularContacts = Object.entries(contactsBefriendedCount);
  mostPopularContacts.sort(([id1, count1], [id2, count2]) => {
    const countDiff = count2 - count1;
    if (countDiff !== 0) return countDiff;
    const name1 = contactsMap[id1].name;
    const name2 = contactsMap[id2].name;
    return name1.localeCompare(name2);
  });
  const mostPopularContactIds = mostPopularContacts.map(([id, count]) => id).slice(0, 3);
  console.log(mostPopularContactIds);

  return { contactsMap, mostPopularContactIds };
};