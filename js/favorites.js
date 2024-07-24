const showFav = () => {
  const favorites = document.getElementById('favorites');
  const menu = document.getElementById('heart');
  favorites.style.marginRight = '-1000px';
  const close = document.getElementById('closeFav');
  close.style.cursor = 'pointer';

  menu.addEventListener('click', () => {
    favorites.style.marginRight = '0';
  });
  close.addEventListener('click', () => {
    favorites.style.marginRight = '-1000px';
  });
};

export default showFav;
