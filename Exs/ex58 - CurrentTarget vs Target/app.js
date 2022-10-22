// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the elements on which the event occured

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = "green";
    console.log("target", e.target); //target refers to specific element
    console.log("currentTarget", e.currentTarget);
    e.target.style.color = "green";
  });
});
