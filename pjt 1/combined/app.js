var windowWidth = window.innerWidth;

var elementWrapper = document.querySelector(".element-wrapper");
var horizontalLength = elementWrapper.scrollWidth;

var horizontalSection = document.querySelector("#horizontal-section");
var distFromTop = horizontalSection.offsetTop;
var scrollDistance = distFromTop + horizontalLength - windowWidth;

// Set the height of #horizontal-section to horizontalLength
horizontalSection.style.height = horizontalLength + 'px';

window.onscroll = function () {
  var scrollTopp = window.scrollY;
  console.log(scrollTopp)
  if (scrollTopp >= distFromTop && scrollTopp <= scrollDistance) {
    // Use translateX with the correct syntax
    elementWrapper.style.transform = "translateX(-" + (scrollTopp - distFromTop) + "px)";
  }
}



