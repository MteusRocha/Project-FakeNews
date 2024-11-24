const root = document.documentElement;
root.className += ' js';

// Function to get the top position of an element
function boxTop(idBox) {
  let boxOffset = idBox.getBoundingClientRect().top + window.scrollY;
  return boxOffset;
}

// Wait for the document to load before executing
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.anime');
  const animationClass = 'anime-init';
  let windowHeight = window.innerHeight;
  let offset = windowHeight - (windowHeight / 4);

  function animeScroll() {
    let documentTop = window.scrollY;
    targets.forEach((target) => {
      if (documentTop > boxTop(target) - offset) {
        target.classList.add(animationClass);
      } else {
        target.classList.remove(animationClass);
      }
    });
  }
  animeScroll();
  
  window.addEventListener('scroll', function() {
    setTimeout(function() { animeScroll(); }, 150);
  });
});