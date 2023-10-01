const body = document.querySelector('body');
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');

function switchTheme(e) {
	if (e.target.checked) {
		body.classList.add('dark-mode');
	} else {
		body.classList.remove('dark-mode');
	}
}

toggleSwitch.addEventListener('change', switchTheme, false);
