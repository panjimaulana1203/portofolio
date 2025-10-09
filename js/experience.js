function toggleAllExperience() {
    const section = document.getElementById('moreExperience');
    const icon = document.getElementById('icon-main-exp');
    const btn = document.getElementById('btn-main-exp');

    const isHidden = section.classList.contains('hidden');

    if (isHidden) {
      // buka semua
      section.classList.remove('hidden');
      icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      // tutup semua
      section.classList.add('hidden');
      icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
      btn.setAttribute('aria-expanded', 'false');
    }
  }