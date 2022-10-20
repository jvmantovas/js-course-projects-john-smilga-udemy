// Select the element or group of elements by class name
// Decide the effect we want to apply to the selection

// getElementByClassName('classname');

// HTMLCollection

const special = document.getElementsByClassName("special");
console.log(special); // returns HTMLCollection

special[2].style.color = "blue";
