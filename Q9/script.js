"use strict";
const tooltip = document.querySelectorAll(".tooltip");

tooltip.forEach((item) => {
    let child = item.children;
  item.addEventListener("mouseenter", (e) => {
    child[0].style.visibility = "visible";
    if (e.clientY + 18 + 5 < 66) {
      child[0].style.bottom = "-125%";
      child[0].style.marginBottom = "-5px";
    } else {
      child[0].style.bottom = "125%";
    }
  });
  item.addEventListener("mouseleave", (e) => {
    child[0].style.visibility = "hidden";
  });
});
