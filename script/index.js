const peopleListUrl = '../data.json';

const loadPeople = async () => {
  const res = await fetch(peopleListUrl);
  const peopleList = await res.json();
  return peopleList;
};

(async () => {
  try {
    const peopleList = await loadPeople();
    console.log(peopleList);
  } catch {
    console.log('Failed to load people list');
  }
})();