// Arrays, Fucntions and Objects
// Objects - key/value pairs methods
// dot notation

const person /*object*/ = {
  name: "João",
  lastName: "Mantovas",
  age: 26,
  education: false,
  married: true,
  siblings: ["Fábio", "Ana Carolina"],
  greeting: function () {
    /*method*/
    console.log("Hello, my name is João");
  },
};

console.log(person.lastName /*a propriedade deve ser invocada com .*/);
console.log(person.siblings[1]);

person.greeting(); /*invocando o method*/
