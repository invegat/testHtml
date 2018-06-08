"use strict";

// document.getElementById("toggle").addEventListener("click", toggleColor);
// function toggleColor() {
//   const el = document.getElementById("hello");
//   const c = el.getAttribute("class");
//   el.setAttribute("class", c === "cred" ? "cgreen" : "cred");
// }
var toggleColor = function toggleColor() {
  var el = document.getElementById("hello");
  var c = el.getAttribute("class");
  el.setAttribute("class", c === "cred" ? "cgreen" : "cred");
};