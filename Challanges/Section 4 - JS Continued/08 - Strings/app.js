function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName("John", "Smith"));

function fullName2({ firstName, lastName }) {
  const fullName2 = `${firstName} ${lastName}`;
  return fullName2.toUpperCase();
}

console.log(fullName2({ lastName: "jordan", firstName: "peter" }));
