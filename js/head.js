var element = document.getElementsByClassName("menuImg")[0];
var newClassName = "imgMenu";
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition >= 60) {
    element.classList.add(newClassName);
    element.classList.remove("menuImg");
  } else {
    element.classList.add("menuImg");
    element.classList.remove(newClassName);
  }
})