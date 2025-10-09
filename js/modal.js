function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  // focus the first focusable element inside modal (if any)
  const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable) focusable.focus();
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Close modals with Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.fixed.inset-0').forEach(m => {
      if (!m.classList.contains('hidden')) {
        m.classList.add('hidden');
      }
    });
    document.body.style.overflow = '';
  }
});
// Close modal when clicking on overlay (the element with class 'fixed inset-0' that directly contains modal content)
document.addEventListener('click', (e) => {
  // find closest overlay element
  const overlay = e.target.closest('.fixed.inset-0');
  if (!overlay) return;
  // if click target is the overlay itself (not the inner modal content), close it
  // assume inner content has class 'rounded-xl' or 'modal-content' - check if clicked element is overlay
  if (overlay === e.target) {
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});
