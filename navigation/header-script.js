var navigationToggled = false;
var dropdownToggled = false

function onTap() {
  navigationToggled = !navigationToggled;
  document.getElementById("hamburger").innerHTML = navigationToggled
    ? "&times"
    : "&#9776";
  document.getElementById("menu").style.display = navigationToggled ? "flex" : "none";

    document.getElementById("navigation-container").style.background = navigationToggled ? "#93C2AC" : "#f3f1ec";
}

function dropdownClicked() {
  dropdownToggled = !dropdownToggled;
  if (window.innerWidth < 600) {
    document.getElementById("dropmenu").style.display = dropdownToggled ? "block" : "none";
  } else {
    window.location.href = '/items/items.html';
  }
  
}

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

