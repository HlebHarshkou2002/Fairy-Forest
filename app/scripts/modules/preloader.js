//Preloader
const preloader = document.getElementById("preloader");

document.body.onload = function () {
  setTimeout(() => {
    preloader.classList.toggle("preloader__none");
    animationLayersTitle();
    animationLayersCaption();
  }, 1000);
};