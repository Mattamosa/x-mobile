// Navigation Button
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// Footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();