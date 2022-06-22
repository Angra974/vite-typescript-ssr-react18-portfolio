export function selectMenu(active: string = "home") {
  const menuLinks = document.querySelectorAll("a[data-nav]");
  menuLinks.forEach(el => {
    el.classList.contains("is_active") && el.classList.remove("is_active");
  });
  document.querySelector(`a[data-nav="${active}"]`)?.classList.add("is_active");
}
