const menu = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const text = document.createElement('h1');
  text.innerText = 'MENU';
  content.appendChild(text);
};

export default menu;