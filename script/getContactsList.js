const contactsListUrl = '../data.json';

export default async () => {
  const res = await fetch(contactsListUrl);
  const peopleList = await res.json();
  return peopleList;
};