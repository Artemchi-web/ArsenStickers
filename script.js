document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.getElementById("mobile-menu");

  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";

    // переключаем состояние
    burger.setAttribute("aria-expanded", !expanded);
    mobileMenu.hidden = expanded; // если было открыто — скрываем

    // анимация для бургер-баров
    burger.classList.toggle("active");
  });

  // закрытие меню при клике на ссылку
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
      burger.classList.remove("active");
    });
  });
});
