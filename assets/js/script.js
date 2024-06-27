
let hamburger = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let line = document.querySelector(".line");

hamburger.addEventListener("click", () => {
    nav_list.classList.toggle("nav-list-onclick");
    line1.classList.toggle("line1-onclick");
    line2.classList.toggle("line2-onclick");
    line3.classList.toggle("line3-onclick");
    hamburger.classList.toggle("hamburger-onclick");
    document.childNodes[1].classList.toggle("body-onclick");
  });
  















