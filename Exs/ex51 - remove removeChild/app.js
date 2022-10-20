// remove
// removeChild

const result = document.querySelector("#result");
// result.remove(); // removes the element directly from dom

const heading = result.querySelector("h1");
result.removeChild(heading); //removes just the h1, not the entire div
