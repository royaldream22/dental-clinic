const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-mobile-menu]");

if (header && toggle && menu) {
  const setOpen = (open) => {
    header.classList.toggle("header--open", open);
    toggle.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
    }
  });

  window.matchMedia("(min-width: 900px)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
}
