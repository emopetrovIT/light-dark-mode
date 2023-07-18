const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME_COLOR = 'dark';
const LIGHT_THEME_COLOR = 'light';
const LOCAL_STORAGE_THEME = 'local-storage-theme';
const DATA_THEME = 'data-theme';

function switchToDark(isDarkMode) {
  nav.style.backgroundColor = isDarkMode
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDarkMode
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';

  isDarkMode
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

  isDarkMode ? imageMode(DARK_THEME_COLOR) : imageMode(LIGHT_THEME_COLOR);
}

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute(DATA_THEME, DARK_THEME_COLOR);
    localStorage.setItem(LOCAL_STORAGE_THEME, DARK_THEME_COLOR);
    switchToDark(true);
  } else {
    document.documentElement.setAttribute(DATA_THEME, LIGHT_THEME_COLOR);
    localStorage.setItem(LOCAL_STORAGE_THEME, LIGHT_THEME_COLOR);
    switchToDark(false);
  }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME);
if (currentTheme) {
  document.documentElement.setAttribute(DATA_THEME, currentTheme);

  if (currentTheme === DARK_THEME_COLOR) {
    toggleSwitch.checked = true;
    switchToDark(true);
  }
}
