const about = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const text = document.createElement('h1');
  text.innerText = 'ABOUT';
  content.appendChild(text);
};

export default about;
