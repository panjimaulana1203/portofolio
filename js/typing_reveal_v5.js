
// Scroll reveal only (typing removed)
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fade-in-up');
        o.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  elems.forEach(el => obs.observe(el));
});
