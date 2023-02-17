const btn = document.querySelector(".btn-theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const icon = document.getElementById("theme");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  icon.innerHTML="light_mode";  
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  icon.innerHTML="dark_mode";
}

btn.addEventListener("click", function () {
  btn.innerHTML = (btn.innerHTML === 'light_mode') ? btn.innerHTML = 'dark_mode' : btn.innerHTML = 'light_mode';
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme") ? "light": "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme") ? "dark": "light";    
  }
  localStorage.setItem("theme", theme);
});

// function openmenu(){
//   var x = document.getElementById("nav");
//   if (x.className === "fixed-nav-bar") {
//     x.className += " responsive";
//   } else {
//     x.className = "fixed-nav-bar";
//   }
// }