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

const form = document.querySelector("form");
  const message = document.getElementById("message");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop the page from refreshing
    message.style.display = "block"; // Show the success message
    form.reset(); // Optional: clear form fields
  });