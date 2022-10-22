/* The load event is fired when the shole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for the resources to finish loading.

window.addEventListener('load, function(){
  //code goes here
}) */

window.addEventListener("load", function () {
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});
