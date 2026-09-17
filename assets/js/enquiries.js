document.addEventListener("click", function (event) {
  document.querySelectorAll(".new-header details[open]").forEach(function (menu) {
    if (!menu.contains(event.target)) menu.removeAttribute("open");
  });
});
document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;
  const openMenus = Array.from(document.querySelectorAll(".new-header details[open]"));
  const focusedMenu = openMenus.reverse().find(function (menu) { return menu.contains(document.activeElement); });
  openMenus.forEach(function (menu) { menu.removeAttribute("open"); });
  if (focusedMenu) focusedMenu.querySelector("summary").focus();
});
