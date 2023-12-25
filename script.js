const body = document.getElementById("body");
const slider = document.getElementById("slider");
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const overlay = document.getElementById("overlay");

window.onload = function() {
  if (localStorage.getItem('darkMode') == "true") {
    body.classList.toggle("darkMode");
    slider.checked = true;
  }
}

function toggleSidebar() {
  sidebar.classList.toggle("sidebar_active");
  overlay.classList.toggle("overlay_active");
}

menuButton.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

function changeTheme() {
  body.classList.toggle("darkMode");
  localStorage.getItem('darkMode') == 'true'
    ?
      localStorage.setItem('darkMode', 'false')
    :
      localStorage.setItem('darkMode', 'true');
}

slider.addEventListener("click", changeTheme);

