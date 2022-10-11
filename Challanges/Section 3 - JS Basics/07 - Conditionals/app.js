const person1 = {
  name: "John",
  age: 25,
  status: "Resident",
};

const person2 = {
  name: "Jane",
  age: 17,
  status: "Tourist",
};

if (person1.age >= 18 && person1.status === "Resident") {
  console.log("This person matches the criteria.");
} else {
  console.log("This person doesn't match the criteria.");
}

if (person2.age >= 18 && person2.status === "Resident") {
  console.log("This person matches the criteria.");
} else {
  console.log("This person doesn't match the criteria.");
}
