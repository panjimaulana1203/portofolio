
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollToTopBtn");
  if (!btn) return;
  const THRESHOLD = 200;
  const whoosh = new Audio("js/whoosh_soft.mp3");

  function updateVisibility() {
    if (window.scrollY > THRESHOLD) {
      btn.classList.add("show");
      btn.setAttribute("aria-hidden", "false");
    } else {
      btn.classList.remove("show");
      btn.setAttribute("aria-hidden", "true");
    }
  }

  setTimeout(updateVisibility, 200);
  window.addEventListener("scroll", updateVisibility, { passive: true });

  btn.addEventListener("click", () => {
    try { whoosh.currentTime = 0; whoosh.play(); } catch(e){}
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(updateVisibility, 800);
  });
});
