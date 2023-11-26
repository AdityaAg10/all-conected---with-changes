gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".Mwrap",
    pin: true,
    scrub: 1,
    snap: 1,
    end: () => "+=" + document.querySelector(".Mwrap").offsetWidth / 2 // Divide offsetWidth by 2 for two divs
  }
});




window.onload = function() {
  var text = document.getElementById('animatedText');
  var photo = document.getElementById('animatedPhoto');

  text.style.opacity = 1; // Fade in the text

  setTimeout(function() {
    photo.style.transform = 'translateX(0)'; // Slide in the photo
  }, 9000); // Wait 1 second before triggering the photo animation
};



