const body = document.getElementById("body");
const slider = document.getElementById("slider");

window.onload = function() {
  if (localStorage.getItem('darkMode') == "true") {
    body.classList.toggle("darkMode");
    slider.checked = true;
  }
}

function changeTheme() {
  body.classList.toggle("darkMode");
  localStorage.getItem('darkMode') == 'true'
    ?
      localStorage.setItem('darkMode', 'false')
    :
      localStorage.setItem('darkMode', 'true');
}

slider.addEventListener("click", changeTheme);

