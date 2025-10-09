document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;
  // Ensure loader visible
  loader.classList.remove("hidden");
  loader.style.visibility = "visible";
  document.body.style.overflow = "hidden";
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;
  const MIN_SHOW = 1000; // 1s minimum display
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.style.overflow = "auto";
    // Remove from DOM after animation complete
    setTimeout(() => {
      if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
    }, 900);
  }, MIN_SHOW);
});