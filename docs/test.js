// document.getElementById("toggle").addEventListener("click", toggleColor);
function toggleColor() {
  const el = document.getElementById("hello");
  const c = el.getAttribute("class");
  el.setAttribute("class", c === "cred" ? "cgreen" : "cred");
}