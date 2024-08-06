import home from './home.js';
import menu from './menu.js';
import about from './about.js';

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

home();

homeBtn.addEventListener('click', (e) => {
  const btn = e.target;
  if (btn.getAttribute('aria-selected') == 'false') {
    btn.setAttribute('aria-selected', 'true');
    menuBtn.setAttribute('aria-selected', 'false');
    aboutBtn.setAttribute('aria-selected', 'false');
    home();
  }
});

menuBtn.addEventListener('click', (e) => {
  const btn = e.target;
  if (btn.getAttribute('aria-selected') == 'false') {
    btn.setAttribute('aria-selected', 'true');
    homeBtn.setAttribute('aria-selected', 'false');
    aboutBtn.setAttribute('aria-selected', 'false');
    menu();
  }
});

aboutBtn.addEventListener('click', (e) => {
  const btn = e.target;
  if (btn.getAttribute('aria-selected') == 'false') {
    btn.setAttribute('aria-selected', 'true');
    homeBtn.setAttribute('aria-selected', 'false');
    menuBtn.setAttribute('aria-selected', 'false');
    about();
  }
});

console.log('This is a webpack template');

// npm start to view in browser
