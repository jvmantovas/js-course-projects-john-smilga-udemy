// className
// classList

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;
console.log(classValue);

second.className = "colors text"; //changes the class

third.classList.add("colors"); //also changes the class, can be used more dinamically
third.classList.add("text");
third.classList.remove("text");

let result = third.classList.contains("colors");
if (result) {
  console.log("contains the class");
} else {
  console.log("doesnt have the class");
}

const classValue2 = third.classList;
third.classList.add(classValue2);
