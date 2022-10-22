// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

list.addEventListener("click", (showBubbling) => {
  console.log("current target", showBubbling.currentTarget);
  console.log("target", showBubbling.target);
  if (showBubbling.target.classList.contains("link")) {
    console.log("you clicked on the link");
  }
});

container.addEventListener("click", (showBubbling) => {
  console.log("current target", showBubbling.currentTarget);
  console.log("target", showBubbling.target);
});

function stopPropagation(e) {
  e.stopPropagation();
}
