import home from './home.js';
import menu from './menu.js';
import about from './about.js';

const tab = Array.from(document.getElementsByTagName('button'));

home();

tab.forEach((t) => {
  t.addEventListener('click', (e) => {
    if (e.target.getAttribute('aria-selected') == 'false') {
      tab.forEach((t) => {
        t.setAttribute('aria-selected', false);
      });
      e.target.setAttribute('aria-selected', 'true');
      switch (e.target.getAttribute('id')) {
        case 'home-btn':
          home();
          break;
        case 'menu-btn':
          menu();
          break;
        case 'about-btn':
          about();
          break;
        default:
          break;
      }
    }
  });
});