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

const showAbout = () => {
  const about = document.getElementById('about');
  const getAbout = document.getElementById('getAbout');
  about.style.marginLeft = '-1000px';
  const close = document.getElementById('closeAbout');
  close.style.cursor = 'pointer';

  getAbout.addEventListener('click', () => {
    document.getElementById('dropdown').style.display = 'none';
    about.style.display = 'flex';
    about.style.marginLeft = '0';
  });
  close.addEventListener('click', () => {
    about.style.marginLeft = '-1000px';
  });
};

export default showMenu;
export { showAbout };
