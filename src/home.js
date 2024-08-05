import './style.css';
import Logo from './img/lafayettelogowhite.png';

const home = () => {
  const content = document.getElementById('content');

  const logo = new Image();
  logo.src = Logo;

  const text = document.createElement('div');
  text.classList.add('text');
  const tagline = document.createElement('h1');
  tagline.innerHTML = 'BIENVENUE CHEZ LAFAYETTE PIZZERIA';

  const description = document.createElement('p');
  description.style.maxWidth = '60ch';
  description.innerHTML =
    'Lafayette Pizzeria est situé sur la rue Bernard dans le plateau Mont-Royal à quelques pas du parc du Mont-Royal. Lafayette Pizzeria a le plaisir de servir des clients satisfaits depuis 1962!<br><br>VENEZ CHATOUILLER VOS PAPILLES GUSTATIVES AVEC TERRASSE LAFAYETTE !';

  content.appendChild(logo);
  text.appendChild(tagline);
  text.appendChild(description);
  content.appendChild(text);
};

export default home;
