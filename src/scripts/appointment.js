const dialog = document.querySelector("[data-appointment]");
const form = document.querySelector("[data-appointment-form]");

if (dialog instanceof HTMLDialogElement && form instanceof HTMLFormElement) {
  const fields = form.querySelector("[data-appointment-fields]");
  const success = form.querySelector("[data-appointment-success]");
  const closeButton = dialog.querySelector("[data-close-appointment]");

  const resetView = () => {
    form.reset();
    if (fields instanceof HTMLElement) fields.hidden = false;
    if (success instanceof HTMLElement) success.hidden = true;
    form.querySelectorAll("[data-error-for]").forEach((node) => {
      if (node instanceof HTMLElement) {
        node.hidden = true;
        node.textContent = "";
      }
    });
    form.querySelectorAll("input").forEach((input) => input.removeAttribute("aria-invalid"));
  };

  const showError = (name, message) => {
    const error = form.querySelector(`[data-error-for="${name}"]`);
    const field = form.elements.namedItem(name);
    if (error instanceof HTMLElement) {
      error.hidden = false;
      error.textContent = message;
    }
    if (field instanceof HTMLInputElement) field.setAttribute("aria-invalid", "true");
  };

  const isUkrainianPhone = (value) => {
    const digits = value.replace(/\D/g, "");
    return /^380\d{9}$/.test(digits) || /^0\d{9}$/.test(digits);
  };

  document.querySelectorAll("[data-open-appointment]").forEach((button) => {
    button.addEventListener("click", () => {
      resetView();
      dialog.showModal();
    });
  });

  closeButton?.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.querySelectorAll("[data-error-for]").forEach((node) => {
      if (node instanceof HTMLElement) {
        node.hidden = true;
        node.textContent = "";
      }
    });

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    let valid = true;

    if (!name) {
      showError("name", "Вкажіть, як до вас звертатися.");
      valid = false;
    }

    if (!isUkrainianPhone(phone)) {
      showError("phone", "Вкажіть телефон у форматі +380 і ще 9 цифр.");
      valid = false;
    }

    if (!valid || !(fields instanceof HTMLElement) || !(success instanceof HTMLElement)) return;

    fields.hidden = true;
    success.hidden = false;
  });
}
