export default function menuMobile() {
  const menu = document.querySelector('[data-menu]');
  const nav = document.querySelector('.nav');
  if (menu && nav) {
    menu.addEventListener('click', openMenu);
    function openMenu() {
      nav.classList.toggle('ative');
    }
  }
}
