// Select the element or group of elements by class name
// Decide the effect we want to apply to the selection

const result = document.querySelector("#result");

// childNodes - returns all childNodes including whitespace which is treated as a text node
const allChildren = result.childNodes;
console.log(allChildren);

// children
const children = result.children;
console.log(children);

// firstChild
console.log(result.firstChild);

// lastChild
console.log(result.lastChild);
