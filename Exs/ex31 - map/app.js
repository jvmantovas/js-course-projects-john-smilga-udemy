// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "boss" },
];

const ages = people.map(function (person) {
  return person.age;
});

console.log(ages);

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  }; //object
});

console.log(newPeople);

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

console.log(names);

document.body.innerHTML = names.join(""); //showing the html modifications on the screen
