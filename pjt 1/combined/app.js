var windowWidth = window.innerWidth;

var elementWrapper = document.querySelector(".element-wrapper");
var horizontalLength = elementWrapper.scrollWidth;

var horizontalSection = document.querySelector("#horizontal-section");
var distFromTop = horizontalSection.offsetTop;
var scrollDistance = distFromTop + horizontalLength - windowWidth;

// Set the height of #horizontal-section to horizontalLength
horizontalSection.style.height = horizontalLength-610 + "px";

var char16 = document.querySelector(".char16");
var char26 = document.querySelector(".char26");
var char36 = document.querySelector(".char36");
var char46 = document.querySelector(".char46");
var elementOffset = horizontalSection.offsetTop;

window.onscroll = function (e) {
  var scrollTopp = window.scrollY;
  // console.log(scrollTopp-elementOffset);
  
  if (scrollTopp >= distFromTop && scrollTopp <= scrollDistance) {
    // Use translateX with the correct syntax
    elementWrapper.style.transform =
    "translateX(-" + (scrollTopp - distFromTop) + "px)";
    
    // Position char16 and char26 based on mouse position
    // console.log(elementOffset)
    char16.style.top = scrollTopp + "px";
    char26.style.top = scrollTopp + "px";
    char16.style.left = scrollTopp - distFromTop + "px";
    char26.style.left = scrollTopp - distFromTop + "px";
  }

  var charitty1 = document.querySelector("#charitty1");
  charitty1.addEventListener("mousemove", function (event) {
    char16.style.top = event.clientY + "px";
    char16.style.left = event.clientX+scrollTopp-distFromTop + "px";

    char16.style.display = "block";
  });
  charitty1.addEventListener("mouseleave", function () {
    char16.style.display = "none";
  });

  var charitty2 = document.querySelector("#charitty2");
  charitty2.addEventListener("mousemove", function (event) {
    char26.style.top = event.clientY + "px";
    char26.style.left = (event.clientX+scrollTopp-distFromTop) + "px";
    char26.style.display = "block";
  });
  charitty2.addEventListener("mouseleave", function () {
    char26.style.display = "none";
  });

  var charitty3 = document.querySelector("#charitty3");
  charitty3.addEventListener("mousemove", function (event) {
    char36.style.top = event.clientY + "px";
    char36.style.left = (event.clientX+scrollTopp-distFromTop) + "px";
    char36.style.display = "block";
  });
  charitty3.addEventListener("mouseleave", function () {
    char36.style.display = "none";
  });

  var charitty4 = document.querySelector("#charitty4");
  charitty4.addEventListener("mousemove", function (event) {
    char46.style.top = event.clientY + "px";
    char46.style.left = (event.clientX+scrollTopp-distFromTop) + "px";
    char46.style.display = "block";
  });
  charitty4.addEventListener("mouseleave", function () {
    char46.style.display = "none";
  });
};

