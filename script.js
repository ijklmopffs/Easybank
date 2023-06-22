const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".links");

hamburger.addEventListener("click", function () {
  console.log("yh");

  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    hamburger.setAttribute("src", "./images/icon-close.svg");
  } else {
    hamburger.setAttribute("src", "./images/icon-hamburger.svg");
  }
});

