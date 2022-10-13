//Arrays and for loop

const names = ["anna", "susy", "bob", "john"];
const lastName = "shakeandbake";
let newArray = [];

//for loop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  newArray.push(`${names[i]} ${lastName}`);
}

console.log(names);
console.log(newArray);
