// declaring variables
var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
var interval;
var progressBars = document.querySelectorAll(".skill-progress > div");
//var showDropDownList = document.getElementsByClassName("dropdown-list");

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    console.log(this.textContent);
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);
    //    interval = setInterval(scrollVertically, 20, targetSection);

    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 20);
  });
}

function scrollVertically(targetSection) {
  if (targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
      clearInterval(interval);
      return;
    }
    window.scrollBy(0, 50);
  }
}

function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}

for (var bar of progressBars) {
  initialiseBar(bar);
}

function fillBar(bar) {
  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 5);
}

// This function uses a for loop for individual progress bars.
function checkScroll() {
  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);

function ShowDropDownListOnClick() {
  document
    .getElementsByClassName("dropdown-list")[0]
    .classList.toggle("showDropDownList");

  document.getElementsByClassName("bars")[0].classList.toggle("hidden");
  document.getElementById("bar-close").classList.toggle("hidden");
}
function showAlert() {
  alert("Hello");
}
document
  .getElementById("icon-bar")
  .addEventListener("click", ShowDropDownListOnClick);

// Scroll Progress Bar

var scrolledBar = document.getElementById("scrolled");

// This function will return the maximum of the following
function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight,
    D.body.offsetHeight,
    D.body.clientHeight
  );
}

var docHeight = getDocHeight();
var windowHeight = window.innerHeight;

window.onresize = function (e) {
  docHeight = getDocHeight();
  windowHeight = window.innerHeight;
};

// This function uses a for loop for individual progress bars. You can modify it so that it applies to the whole skill section at once
function setScrolled() {
  var scrolled = Math.floor(
    (window.scrollY / (docHeight - windowHeight)) * 100
  );

  scrolledBar.style.width = scrolled + "%";
}

window.addEventListener("scroll", setScrolled);
