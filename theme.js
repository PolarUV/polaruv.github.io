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

// function changeLng() {
//   document.getElementById("Language").classList.toggle("show");
// }

// window.onclick = function(event) {
//   if (!event.target.matches('.btn-language')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           if (openDropdown.classList.contains('show')) {
//               openDropdown.classList.remove('show');
//           }
//       }
//   }
// }

// var currentLang = localStorage.getItem("lang");

// if (currentLang == "ru") {
//   location.href = window.location.pathname + '#ru'
//   hash="ru";
//   lang = hash;
//   console.log(lang)
//   for (let key in langArr) {
//       let elem = document.querySelector('.lng-' + key);
//       if (elem) {
//           elem.innerHTML = langArr[key][hash];
//       }  
//   }
// } else if (currentLang == "en") {
//   location.href = window.location.pathname + '#en'
//   hash="en";
//   lang = hash;
//   console.log(lang)
//   for (let key in langArr) {
//       let elem = document.querySelector('.lng-' + key);
//       if (elem) {
//           elem.innerHTML = langArr[key][hash];
//       }  
//   }
// } else if (currentLang == "ge") {
//   location.href = window.location.pathname + '#ge'
//   hash="ge";
//   lang = hash;
//   console.log(lang)
//   for (let key in langArr) {
//       let elem = document.querySelector('.lng-' + key);
//       if (elem) {
//           elem.innerHTML = langArr[key][hash];
//       }  
//   }
// } else {
//   location.href = window.location.pathname + '#ru'
//   hash="ru";
//   lang = hash;
//   console.log(lang)
//   for (let key in langArr) {
//       let elem = document.querySelector('.lng-' + key);
//       if (elem) {
//           elem.innerHTML = langArr[key][hash];
//       }  
//   }
// }



// function changeLanguage(lang) {
//   var land = lang;
//   location.href = window.location.pathname + '#' + lang;
//   let hash = window.location.hash;
//   hash = hash.substr(1);
//   // console.log(hash);
//   lang = hash;
//   for (let key in langArr) {
//       let elem = document.querySelector('.lng-' + key);
//       if (elem) {
//           elem.innerHTML = langArr[key][hash];
//       }  
//   }
//   localStorage.setItem("lang", land);
// }

var oldScrollY = 0;
var div = document.querySelector('.downnav');

window.addEventListener('scroll', function(){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var dY = scrolled - oldScrollY;
  
  if ( dY < 0 ){
    div.classList.add('downnav-1');
  } else {
    div.classList.remove('downnav-1');
  }
  
  oldScrollY = scrolled;
});