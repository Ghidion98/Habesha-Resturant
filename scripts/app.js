let menuOpen = false;

function toggleMenu() {
  const menu = document.getElementById('menu');
  if (!menuOpen) {
    menu.style.right = '0';
  } else {
    menu.style.right = '-260px';
  }
  menuOpen = !menuOpen;
}
