// Smooth scrolling to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Light animations on scroll
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    });
  });
// Typewriter Effect
const typewriterText = "Hi, I'm Draco, a Web Developer!";
let index = 0;

function type() {
  if (index < typewriterText.length) {
    document.getElementById("typewriter").innerHTML += typewriterText.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

window.onload = function() {
  type();
};

function openLinkWithButton() {
  var link = document.createElement("button");
  link.href = "https://www.delta-car.com";
  link.target = "_blank"; // Open in a new tab
  link.click();
}

