// =============================================
//  UPSCALE DRIP — Main Script
// =============================================

// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- Reveal on scroll ---
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 100 * (entry.target.dataset.delay || 0));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el, i) => {
  el.dataset.delay = i % 4;
  observer.observe(el);
});

// --- Form submit ---
function handleSubmit(e) {
  e.preventDefault();
  const confirm = document.getElementById('formConfirm');
  confirm.textContent = '✦  You\'re in. Welcome to the inner circle.';
  e.target.reset();
  setTimeout(() => { confirm.textContent = ''; }, 5000);
}

// --- Smooth active nav link ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});
