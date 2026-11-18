const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-mobile-menu]");

if (header && toggle && menu) {
  let frame = 0;
  let hideTimer = 0;

  const hideIfClosed = () => {
    if (toggle.getAttribute("aria-expanded") !== "true") menu.hidden = true;
  };

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    window.clearTimeout(hideTimer);
    window.cancelAnimationFrame(frame);

    if (open) {
      menu.hidden = false;
      frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => {
          if (toggle.getAttribute("aria-expanded") === "true") {
            header.classList.add("header--open");
          }
        });
      });
      return;
    }

    header.classList.remove("header--open");
    menu.addEventListener(
      "transitionend",
      (event) => {
        if (event.target === menu) hideIfClosed();
      },
      { once: true },
    );
    hideTimer = window.setTimeout(hideIfClosed, 400);
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

  window.matchMedia("(min-width: 960px)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
}
