// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector(".first");

const second = (first.nextSibling.nextSibling.style.color = "red");
console.log(second);

const last = document.querySelector("#last");
const third = (last.previousSibling.previousSibling.style.color = "blue");
console.log(third);

console.log(last.nextSibling.nextSibling); //there is no element after the last, so the return is null

//previousElementSibling
//nextElementSibling

const firstElement = document.querySelector(".first");
first.nextElementSibling.style.backgroundColor = "blue";
