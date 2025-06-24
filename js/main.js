// Smooth scroll for anchor links and mobile menu toggle

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }
});

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}); 