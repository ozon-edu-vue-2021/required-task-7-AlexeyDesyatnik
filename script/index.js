import getPeopleList from "./getPeopleList.js";

(async () => {
  try {
    const peopleList = await getPeopleList();
    console.log(peopleList);
  } catch {
    console.log('Failed to load people list');
  }
})();