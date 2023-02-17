function changeLng() {
    document.getElementById("Language").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.btn-language')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var currentLang = localStorage.getItem("lang");

if (currentLang == "ru") {
    location.href = window.location.pathname + '#ru'
    hash="ru";
    lang = hash;
    console.log(lang)
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }  
    }
} else if (currentLang == "en") {
    location.href = window.location.pathname + '#en'
    hash="en";
    lang = hash;
    console.log(lang)
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }  
    }
} else if (currentLang == "ge") {
    location.href = window.location.pathname + '#ge'
    hash="ge";
    lang = hash;
    console.log(lang)
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }  
    }
} else {
    location.href = window.location.pathname + '#ru'
    hash="ru";
    lang = hash;
    console.log(lang)
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }  
    }
}



function changeLanguage(lang) {
    var land = lang;
    location.href = window.location.pathname + '#' + lang;
    let hash = window.location.hash;
    hash = hash.substr(1);
    // console.log(hash);
    lang = hash;
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }  
    }
    localStorage.setItem("lang", land);
}


