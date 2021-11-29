const peopleListUrl = '../data.json';

export default async () => {
  const res = await fetch(peopleListUrl);
  const peopleList = await res.json();
  return peopleList;
};