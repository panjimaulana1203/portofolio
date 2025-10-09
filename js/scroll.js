document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollToTopBtn");
  if (!btn) return;
  const THRESHOLD = 200;

  function updateVisibility() {
    if (window.scrollY > THRESHOLD) {
      btn.classList.add("show");
      btn.setAttribute("aria-hidden", "false");
    } else {
      btn.classList.remove("show");
      btn.setAttribute("aria-hidden", "true");
    }
  }

  // Check initial state with small delay to avoid flicker
  setTimeout(updateVisibility, 200);
  window.addEventListener("scroll", updateVisibility, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Hide button after smooth scroll ends
    setTimeout(updateVisibility, 800);
  });
});