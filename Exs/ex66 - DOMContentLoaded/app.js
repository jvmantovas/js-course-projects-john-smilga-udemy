/* The DOMContentLoaded event fires when the inital HTML document has been completely loaded and parsed, without waiting for stylesheets, images, subframes to finish loading.

window.addEventListener('DOMContentLoaded', function (){
  //code goes here
}) */

window.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector("h1");
  console.log(heading);
  heading.style.color = "red";
});
