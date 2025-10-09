const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    // animasi burger ke X
    menuBtn.classList.toggle("open");
  });

  // Animasi burger ke X
  const style = document.createElement("style");
  style.textContent = `
    #menu-btn.open span:nth-child(1) {
      transform: rotate(45deg) translateY(7px);
    }
    #menu-btn.open span:nth-child(2) {
      opacity: 0;
    }
    #menu-btn.open span:nth-child(3) {
      transform: rotate(-45deg) translateY(-7px);
    }
    #menu-btn span {
      transition: all 0.3s ease;
    }
  `;
  document.head.appendChild(style);