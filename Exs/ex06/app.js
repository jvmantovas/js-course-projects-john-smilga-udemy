// Implicit Type Conversion

const name = "João";
const lastName = "Mantovas";
const fullName = name + " " + lastName;
console.log(fullName);

const number = 4;
const number2 = 10;
const result = number + number2;
console.log(result);

const value1 = name - lastName;
console.log(value1); //Returns NaN(not a number) in console

let number3 = 10;
let number4 = 23;
number4 = "23";
const result2 = number3 + number4; //o js aplica a concatenação de "strings", então ele soma as strings, retornando o valor 1023 (branco) que não é um number no console
console.log(result2);

const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  value = parseInt(value); //parseint é uma função que analisa o argumento da string e retorna um número inteiro
  console.log("Input Value Type");
  console.log(value);
  console.log("Sum of Two Values");
  console.log(randomNumber + value);
});
