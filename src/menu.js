const menu = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';

  content.setAttribute('aria-labelledby', 'menu-btn');
  const text = document.createElement('h1');
  text.innerText = 'MENU';
  content.appendChild(text);
};

export default menu;