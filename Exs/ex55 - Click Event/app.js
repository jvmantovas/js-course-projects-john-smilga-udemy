// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changeColors() {
  let hasClass = heading.classList.contains("blue");
  if (hasClass) {
    heading.classList.remove("blue");
  } else {
    heading.classList.add("blue");
  }
}

btn.addEventListener("click", changeColors);
