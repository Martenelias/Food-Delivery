const showMenu = () => {
  const dropdown = document.getElementById('dropdown');
  const menu = document.getElementById('burger-menu');
  dropdown.style.marginLeft = '-1000px';
  const close = document.getElementById('closeMenu');
  close.style.cursor = 'pointer';

  menu.addEventListener('click', () => {
    dropdown.style.display = 'flex';
    dropdown.style.marginLeft = '0';
  });
  close.addEventListener('click', () => {
    dropdown.style.marginLeft = '-1000px';
  });
};

export default showMenu;
