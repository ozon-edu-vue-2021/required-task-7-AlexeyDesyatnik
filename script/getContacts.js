const contactsUrl = '../data.json';

export default async () => {
  const res = await fetch(contactsUrl);
  const contacts = await res.json();
  return contacts;
};