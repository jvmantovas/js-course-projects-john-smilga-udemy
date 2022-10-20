// Select the element or group of elements by class name
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css'); - selects all

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

const item = document.querySelector(".special");
console.log(item); //querySelector selects only the first reference

const lastItem = document.querySelector("li:last-child");
console.log(lastItem);

const items = document.querySelectorAll(".special");
console.log(items); //returns a NodeList

items.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
