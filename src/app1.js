const context = document.getElementById('container');
const menu = document.getElementById('menu');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  let x = e.clientX;
  let y = e.clientY;

  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  const cmWidth = context.offsetWidth;
  const cmHeight = context.offsetHeight;


  if (x + cmWidth > winWidth) x = winWidth - cmWidth;
  if (y + cmHeight > winHeight) y = winHeight - cmHeight;


  const enoughSpaceRight = x + cmWidth + menu.offsetWidth < winWidth;
  menu.style.left = enoughSpaceRight ? '260px' : '-170px';

  context.style.top = `${y}px`;
  context.style.left = `${x}px`;
  context.classList.remove('hidden');
});

document.addEventListener('click', () => {
  context.classList.add('hidden');
});
