// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "boss" },
  { name: "anna", age: 35, position: "boss" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});
console.log(youngPeople);

const developers = people.filter(function (person) {
  return person.position === "developer";
});
console.log(developers);
